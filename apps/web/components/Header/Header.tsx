"use client";

import { Input, Text } from "@chzzk-gamble/ui";

export function Header() {
  return <header>
    <Text size="title">CHZZK GAMBLE</Text>
    <Input placeholder="스트리머 이름을 입력하세요" />
  </header>
}