"use client";

import Lottie from "react-lottie-player";
import resultAnimation from "./RouletteResultAnimationLottie.json";
import { rouletteResultAnimationStyle } from "./RouletteResultAnimation.style";
import { useEffect, useState } from "react";

interface RouletteResultAnimationProps {
  play?: boolean;
  onComplete?: () => void;
}

export function RouletteResultAnimation({ play = false, onComplete }: RouletteResultAnimationProps) {
  const [key, setKey] = useState(0);
  const [isAnimationStart, setIsAnimationStart] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationStart(false);
    onComplete?.();
  }

  useEffect(() => {
    if (play) {
      setKey(prev => prev + 1);
      setIsAnimationStart(true);
    }
  }, [play]);

  return <div className={rouletteResultAnimationStyle}>
    <Lottie
      key={key}
      animationData={resultAnimation}
      style={{ height: "100%", aspectRatio: "1/1", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      loop={false}
      play={isAnimationStart}
      onComplete={handleAnimationComplete}
    />
  </div>
}