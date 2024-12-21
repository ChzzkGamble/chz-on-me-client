import { useMutation } from "@tanstack/react-query";
import { postRoulette, PostRouletteParams } from "../../remote";

export function usePostRoulette() {
  const { mutate, isPending, isError, error, isSuccess, ...rest } = useMutation({
    mutationFn: (params: PostRouletteParams) => postRoulette(params),
  });

  return { mutate, isPending, isError, error, isSuccess, ...rest };
}
