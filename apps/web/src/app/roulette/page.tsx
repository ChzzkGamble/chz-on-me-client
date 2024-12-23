"use client";
import { Button, Roulette, Text } from "@chz-on-me/ui";
import { HStack, VStack } from "_panda/jsx";
import { useState } from "react";
import { RouletteTable } from "../../components/RouletteTable/RouletteTable";

const MOCK = [
    {
        "id": 1,
        "name": "짜장면",
        "vote": 3,
        "percentage": "50.00%"
    },
    {
        "id": 2,
        "name": "둘이먹다하나가죽어도모르는원조교동굴짬뽕",
        "vote": 2,
        "percentage": "33.33%"
    },
    {
        "id": 3,
        "name": "탕수육",
        "vote": 1,
        "percentage": "16.67%"
    }
]

export default function RoulettePage() {
  const [selectedOption, setSelectedOption] = useState<number>(MOCK[0]?.id ?? 0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isVoting, setIsVoting] = useState(false);

  const handleChange = (index: number) => {
    setSelectedOption(index);
  };

  const handleSpin = () => {
    setIsSpinning(true);
  };

  const handleVoting = () => {
    setIsVoting(!isVoting);
  };

  const handleEnd = () => {
    setIsSpinning(false);
  };

  return (
    <HStack gap="4rem" justify="center"  height="100vh">
      <VStack
        gap="2rem"
        justify="center"
        height="100vh"
      >
        <Text>{MOCK.find(option => option.id === selectedOption)?.name}</Text>
        <Roulette options={MOCK} onChange={handleChange} onEnd={handleEnd} isSpinning={isSpinning} />
        <HStack>
        <Button onClick={handleSpin} disabled={isVoting || isSpinning}>룰렛 돌리기</Button>
        <Button onClick={handleVoting} disabled={isSpinning}>{isVoting ? '투표 종료' : '투표 시작'}</Button>
      </HStack>
      </VStack>
      <RouletteTable options={MOCK} />
    </HStack>
  );
}
