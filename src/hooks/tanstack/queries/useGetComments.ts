import COMMENT_QUERY_KEYS from "../queryKeys/commentQueryKeys";
import { getReplyComments } from "@/actions/commentActions";
import type { MainCategory } from "@/types/filterTypes";
import { useQuery } from "@tanstack/react-query";

/** 댓글 요청 쿼리 */
export const useGetComments = ({ postType, postId }: { postType: MainCategory; postId: string }) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEYS[postType](postId),
    queryFn: () => getReplyComments({ postType, postId }),
  });
};
