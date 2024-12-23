"use client";

import { useRef, useEffect } from "react";
import { RouletteProps } from "./Roulette.type";
import { motion } from "motion/react";
import { useDrawRoulette } from "./useDrawRoulette";
import { useRouletteAnimation } from "./useRouletteAnimation";
import { useRoulette } from "./useRoulette";
import { rouletteWrapper } from "./Roulette.style";
import { Wrap } from "_panda/jsx";

export function Roulette({options, onChange, onEnd, isSpinning}: RouletteProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const {getSelectedId} = useRoulette(options);
  const {controls} = useRouletteAnimation({isSpinning});
  useDrawRoulette({options, canvasRef, wrapperRef});

  return (
    <Wrap className={rouletteWrapper()} ref={wrapperRef}>
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
        <canvas ref={canvasRef} />
      </motion.div>
    </Wrap>
  )
}
