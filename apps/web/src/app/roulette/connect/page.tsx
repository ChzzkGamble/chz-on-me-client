"use client";

import { usePostConnect } from "@/hooks/queries/usePostConnect";
import { usePostRoulette } from "@/hooks/queries/usePostRoulette";
// import { postConnect, postRoulette } from "@/remote";
import { Input, Button } from "@chz-on-me/ui";
import { Stack } from "_panda/jsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouletteConnectPage() {
  const router = useRouter();
  const [streamerInput, setStreamerInput] = useState(""); 
  const [cheeseInput, setCheeseInput] = useState("");
  const { mutate: postConnect, isSuccess: isConnectSuccess } = usePostConnect();
  const { mutate: postRoulette, isSuccess: isRouletteSuccess } = usePostRoulette();

  const handleConnect = () => {
    postConnect({ channelName: streamerInput });
  }
  
  useEffect(() => {
    if (isConnectSuccess) {
      postRoulette({ channelName: streamerInput, rouletteUnit: Number(cheeseInput) });
    }
  }, [isConnectSuccess]);

  useEffect(() => {
    if (isRouletteSuccess) {
      router.push('/roulette');
    }
  }, [isRouletteSuccess]);

  return (
    <Stack gap="2rem" justify="center" align="center" height="100vh">
      <Stack gap="0.5rem" justify="start">
        <Input label="스트리머 이름" placeholder="스트리머 이름을 입력하세요" value={streamerInput} onChange={(e) => setStreamerInput(e.target.value)} />
        <Input label="치즈 금액" placeholder="치즈 금액을 입력하세요" value={cheeseInput} onChange={(e) => setCheeseInput(e.target.value)} />
        <Button type="submit" onClick={handleConnect}>룰렛 생성하기</Button>
      </Stack>
    </Stack>
  );
}
