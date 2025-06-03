import COMMENT_QUERY_KEYS from "../queryKeys/commentQueryKeys";
import { getReplyCommentsApi } from "@/apis/commentApis";
import type { PostType } from "@/types/filterTypes";
import { useQuery } from "@tanstack/react-query";

/** 댓글 요청 쿼리 */
export const useGetComments = ({ postType, postId }: { postType: PostType; postId: string }) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEYS[postType](postId),
    queryFn: () => getReplyCommentsApi({ postType, postId }),
  });
};
