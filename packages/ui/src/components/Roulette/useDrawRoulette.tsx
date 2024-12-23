import { useEffect } from "react";
import { RoulettePie } from "./Roulette.type";

interface UseDrawRouletteProps {
  options: RoulettePie[];
  canvasRef: React.RefObject<HTMLCanvasElement>;
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export function useDrawRoulette({options, canvasRef, wrapperRef}: UseDrawRouletteProps) {
  const drawPies = () => {
    const canvas = canvasRef.current;
    const scale = window.devicePixelRatio || 1;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const [widthWithScale, heightWithScale] = [canvas.width * scale, canvas.height * scale];
    ctx.clearRect(0, 0, widthWithScale, heightWithScale);
    
    let startRadian = 0;
    let endRadian = 0;
    let textRadian = 0;
    const radius = Math.min(widthWithScale, heightWithScale) / 2;
    const centerX = widthWithScale / 2;
    const centerY = heightWithScale / 2;
    
    options.forEach(({name, percentage}, index) => {
      const pieRadian = (Number(percentage.replace('%', '')) / 100) * Math.PI * 2;
      endRadian = startRadian + pieRadian;
      // TODO: (@Todari) 조각에 따른 컬러로 변경 필요
      const pastelColors = [
        '#FF6B6B', // 빨강
        '#FFA06B', // 주황
        '#FFD93D', // 노랑
        '#6BCB77', // 초록
        '#4D96FF', // 파랑
        '#6B7AFF', // 남색
        '#9B6BFF'  // 보라
      ];
      
      ctx.fillStyle = pastelColors[index % pastelColors.length] ?? "#FFB3BA";
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startRadian, endRadian);
      ctx.closePath();
      ctx.fill();
      ctx.save();
      
      textRadian = (startRadian + endRadian) / 2 + Math.PI / 120;
      const textX = centerX + Math.cos(textRadian) * (radius / 2);
      const textY = centerY + Math.sin(textRadian) * (radius / 2);
      ctx.translate(textX, textY);
      ctx.rotate(textRadian);
      ctx.font = 'bold 32px Pretendard';
      ctx.fillStyle = 'black';
      ctx.fillText(name, 0, 0);
      
      ctx.restore();
      startRadian = endRadian;
    })
    ctx.scale(1/scale, 1/scale);
  }
  
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current && wrapperRef.current) {
        const { width, height } = wrapperRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        drawPies();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [options]);

  useEffect(() => {
    drawPies();
  }, [options])
}