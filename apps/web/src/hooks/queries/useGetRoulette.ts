import { QUERY_KEY } from "@/constants/queryKey";
import { getRoulette } from "@/remote";
import { useQuery } from "@tanstack/react-query";

export const useGetRoulette = () => {
  const {data, isSuccess, isError, error, isPending, ...rest} = useQuery({
    refetchInterval: 3000,
    queryKey: [QUERY_KEY.roulette],
    queryFn: () => getRoulette(),
  });

  return {data, isSuccess, isError, error, isPending, ...rest};
}