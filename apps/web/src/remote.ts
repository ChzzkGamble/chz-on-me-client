import { http } from "@chz-on-me/util";

export interface PostConnectParams {
  channelName: string;
};

export async function postConnect(params: PostConnectParams) {
  const res = await http.post(`${process.env.NEXT_PUBLIC_API_URL}/connect`, {
    channelName: params.channelName,
  });

  return res;
}

export interface PostRouletteParams {
  channelName: string;
  rouletteUnit: number;
};

export async function postRoulette(params: PostRouletteParams) {
  const res = await http.post(`${process.env.NEXT_PUBLIC_API_URL}/roulette/create`, {
    channelName: params.channelName,
    rouletteUnit: params.rouletteUnit,
  });

  return res;
}