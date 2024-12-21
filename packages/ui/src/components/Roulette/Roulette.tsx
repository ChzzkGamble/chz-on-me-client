"use client";

import { useRef } from "react";
import { RouletteProps } from "./Roulette.type";
import { motion } from "motion/react";
import { useDrawRoulette } from "./useDrawRoulette";
import { useRouletteAnimation } from "./useRouletteAnimation";
import { useRoulette } from "./useRoulette";

export function Roulette({options, onChange, onEnd, isSpinning}: RouletteProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {getSelectedId} = useRoulette(options);
  const {controls} = useRouletteAnimation({isSpinning});
  useDrawRoulette({options, canvasRef});

  return (
    <motion.div
      initial={{rotate: -90}}
      animate={controls}
      onUpdate={(last) => {
        onChange(getSelectedId(last.rotate as number));
      }}
      onAnimationComplete={() => {
        onEnd();
      }}
  >
      <canvas width={640} height={640} ref={canvasRef} />
    </motion.div>
  )
}
