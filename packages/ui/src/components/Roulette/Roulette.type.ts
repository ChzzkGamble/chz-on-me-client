export interface RoulettePie {
  id: number;
  name: string;
  vote: number;
  percentage: string;
}

export interface RouletteProps {
  options: RoulettePie[];
  onChange: (index:number) => void;
  onEnd: () => void;
  isSpinning: boolean;
}
