import { Button, DimmedLayer, Text } from "@chz-on-me/ui";
import { VStack } from "_panda/jsx";
import { rouletteResultStyle } from "./RouletteResult.style";
import { ZINDEX } from "@/constants/zindex";
import { RouletteResultAnimation } from "../RouletteResultAnimation/RouletteResultAnimation";

interface RouletteResultProps {
  result: string;
  close: () => void;
}

export function RouletteResult({result, close}: RouletteResultProps) {
  return (
    <div className={rouletteResultStyle(ZINDEX.rouletteResult)}>
      <DimmedLayer />
      <RouletteResultAnimation play={true} />
      <VStack 
        position="fixed" 
        width="100%"
        height="100%"
        gap={16} 
        justify="center"
      >
        <VStack gap={8}>
          <Text size="large" color="white">룰렛 결과</Text>
          <Text size="heading" color="white">{result}</Text>
        </VStack>
        <Button onClick={close}>닫기</Button>
      </VStack>
    </div>
  )
}