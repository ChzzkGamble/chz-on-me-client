import { http } from "@chz-on-me/util";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface PostConnectParams {
  channelName: string;
};

export async function postConnect(params: PostConnectParams) {
  const res = await http.post(`${API_BASE_URL}/connect`, {
    channelName: params.channelName,
  });

  return res;
}

export interface PostRouletteParams {
  channelName: string;
  rouletteUnit: number;
};

export async function postRoulette(params: PostRouletteParams) {
  const res = await http.post(`${API_BASE_URL}/roulette/create`, {
    channelName: params.channelName,
    rouletteUnit: params.rouletteUnit,
  });

  return res;
}

export async function getRoulette() {
  const res = await http.get(`${API_BASE_URL}/roulette`);

  return res;
}