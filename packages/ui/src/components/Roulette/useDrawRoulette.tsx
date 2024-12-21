import { useEffect } from "react";
import { RoulettePie } from "./Roulette.type";

interface UseDrawRouletteProps {
  options: RoulettePie[];
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export function useDrawRoulette({options, canvasRef}: UseDrawRouletteProps) {
  useEffect(() => {
    const drawPies = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let startRadian = 0;
      let endRadian = 0;
      let textRadian = 0;
      const radius = Math.min(canvas.width, canvas.height) / 2;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      options.forEach(({name, vote, percentage}, index) => {
        const pieRadian = (Number(percentage.replace('%', '')) / 100) * Math.PI * 2;
        console.log(startRadian, pieRadian);
        endRadian = startRadian + pieRadian;
        // TODO: (@Todari) 조각에 따른 컬러로 변경 필요
        const pastelColors = [
          '#FFE5E5', // 파스텔 핑크
          '#FFD4E5', // 라이트 로즈
          '#FFCCEA', // 소프트 핑크 
          '#FFC4FF', // 라이트 퍼플
          '#E5C4FF', // 라벤더
          '#D4C4FF', // 페리윙클
          '#C4C4FF', // 파스텔 블루
          '#C4E5FF', // 스카이 블루
          '#C4FFF4', // 민트
          '#C4FFD4', // 라이트 그린
          '#E5FFC4', // 라임
          '#FFFFC4', // 파스텔 옐로우
          '#FFE5C4', // 피치
          '#FFD4C4', // 살몬
          '#FFC4C4', // 코랄
          '#FFB3BA', // 로즈
          '#FFA3A3'  // 연한 레드
        ];
        console.log(pastelColors[index % pastelColors.length]);
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
        ctx.font = 'bold 16px Pretendard';
        ctx.fillStyle = 'black';
        ctx.fillText(name, 0, 0);

        ctx.restore();
        startRadian = endRadian;
      })
    }
    
    drawPies();
  }, [options])
}