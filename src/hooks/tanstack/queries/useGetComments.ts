import COMMENT_QUERY_KEYS from "../queryKeys/commentQueryKeys";
import { getComments } from "@/actions/commentActions";
import type { MainCategory } from "@/types/filterTypes";
import { useQuery } from "@tanstack/react-query";

/** 댓글 요청 쿼리 */
export const useGetComments = ({ postType, postId }: { postType: MainCategory; postId: string }) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEYS[postType](postId),
    queryFn: () => getComments({ postType, postId }),
  });
};
