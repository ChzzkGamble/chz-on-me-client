"use client";

import { Text } from "@chzzk-gamble/ui";
import { headerStyle, navStyle, streamerImgStyle, streamerInfoStyle } from "./Header.style";
import { HeaderProps } from "./Header.type";
import Link from "next/link";

export function Header({ streamerId, streamerImg }: HeaderProps) {

  return (
    <header className={headerStyle}>
      <Link href="/">
        <Text size="title" color="white">CHZZK GAMBLE</Text>
      </Link>
      <div className={navStyle}>
        <Link href="/roulette/connect">
          <Text size="large" color="white">룰렛</Text>
        </Link>
        <Link href="/video">
          <Text size="large" color="white">영상도네</Text>
        </Link>
      </div>
      <div className={streamerInfoStyle(streamerId)}>
        <img src={streamerImg} alt={`${streamerId} 사진`} className={streamerImgStyle} />
        <Text size="subtitle" color="white">{streamerId}</Text>
      </div>
    </header>
  )
}