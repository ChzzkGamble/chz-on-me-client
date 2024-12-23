import React, { useEffect, useRef } from 'react';
import { RoulettePie } from './Roulette.type';

interface UseDrawRouletteProps {
  options: RoulettePie[];
  wrapperRef: React.RefObject<HTMLDivElement>;
}

const pastelColors = ['#FF6B6B', '#FFA06B', '#FFD93D', '#6BCB77', '#4D96FF', '#6B7AFF', '#9B6BFF'];

export function RouletteSvg({ options, wrapperRef }: UseDrawRouletteProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const resizeSvg = () => {
      if (!svgRef.current || !wrapperRef.current) return;

      const svg = svgRef.current;
      const { width, height } = wrapperRef.current.getBoundingClientRect();
      svg.setAttribute('width', width.toString());
      svg.setAttribute('height', height.toString());

      const radius = Math.min(width, height) / 2;
      const centerX = width / 2;
      const centerY = height / 2;
      let startAngle = 0;

      // 기존 요소들 제거
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      options.forEach(({ name, percentage }, index) => {
        const sliceAngle = (Number(percentage.replace('%', '')) / 100) * 360;
        const endAngle = startAngle + sliceAngle;

        const x1 = centerX + radius * Math.cos((Math.PI * startAngle) / 180);
        const y1 = centerY + radius * Math.sin((Math.PI * startAngle) / 180);
        const x2 = centerX + radius * Math.cos((Math.PI * endAngle) / 180);
        const y2 = centerY + radius * Math.sin((Math.PI * endAngle) / 180);

        const largeArcFlag = sliceAngle > 180 ? 1 : 0;

        const pathData = [
          `M ${centerX} ${centerY}`, // 시작점
          `L ${x1} ${y1}`, // 첫 번째 선
          `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`, // 호
          'Z', // 닫기
        ].join(' ');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', pastelColors[index % pastelColors.length] ?? '#FFB3BA');
        svg.appendChild(path);

        // 텍스트 추가
        const midAngle = (startAngle + endAngle) / 2;
        const textRadius = radius * 0.6;
        const textX = centerX + textRadius * Math.cos((Math.PI * midAngle) / 180);
        const textY = centerY + textRadius * Math.sin((Math.PI * midAngle) / 180);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX.toString());
        text.setAttribute('y', textY.toString());
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('fill', 'black');
        text.setAttribute('font-family', 'Pretendard');
        text.setAttribute('font-size', '16');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('transform', `rotate(${midAngle}, ${textX}, ${textY})`);
        text.textContent = name;
        svg.appendChild(text);

        startAngle = endAngle;
      });
    };

    resizeSvg();
    window.addEventListener('resize', resizeSvg);
    return () => window.removeEventListener('resize', resizeSvg);
  }, [options]);

  return <svg ref={svgRef} />;
}