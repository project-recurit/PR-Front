import queryKeys from "../queryKeys";
import { getComments } from "@/actions/commentActions";
import { useQuery } from "@tanstack/react-query";

/** 댓글 요청 쿼리 */
export const useGetComments = ({ postId }: { postId: string }) => {
  return useQuery({
    queryKey: queryKeys.comments.root(postId),
    queryFn: () => getComments({ postId }),
  });
};
