import { postConnect, PostConnectParams } from "@/remote";
import { useMutation } from "@tanstack/react-query";

export const usePostConnect = () => {
  const {data, isSuccess, isError, error, isPending, ...rest} = useMutation({
    mutationFn: (params: PostConnectParams) => postConnect(params),
  });

  return {data, isSuccess, isError, error, isPending, ...rest};
};
