import { useAnimationControls } from "motion/react";
import { useEffect, useMemo } from "react";

interface UseRouletteAnimationProps {
  isSpinning: boolean;
}

export function useRouletteAnimation({isSpinning}: UseRouletteAnimationProps) {
const controls = useAnimationControls();
const randomRotate = useMemo(() => Math.floor(Math.random() * 360), [isSpinning]);

  useEffect(() => {
    if (isSpinning) {
      controls.start({
        rotate: [-90, -210, 3510 + randomRotate],
        transition: {
          duration: 10,
          times: [0, 0.1, 1],
          ease: ['easeIn', 'circOut', 'circOut']
        }
      });
    }
  }, [isSpinning, controls, randomRotate]);

return {controls};
}
