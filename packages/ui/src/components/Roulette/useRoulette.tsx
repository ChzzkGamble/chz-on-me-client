import { RoulettePie } from "./Roulette.type";

export function useRoulette(options: RoulettePie[]) {
  
  const getSelectedId = (degree: number) => {
      const normalizedRotation = (360 - ((degree + 90) % 360)) % 360;
    let currentAngle = 0;
    
    for (const option of options) {
      const angleSize = (Number(option.percentage.replace('%', '')) / 100) * 360;
      if (normalizedRotation >= currentAngle && normalizedRotation < currentAngle + angleSize) {
        return option.id;
      }
      currentAngle += angleSize;
    }
    
    return options[0]?.id ?? 0;
  };

  return {getSelectedId};
}
  