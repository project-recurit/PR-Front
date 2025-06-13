import COMMENT_QUERY_KEYS from "../queryKeys/commentQueryKeys";
import { getCommentListApi, getReplyCommentsApi } from "@/apis/commentApis";
import type { PostTargetParams } from "@/types/api/paramsTypes";
import { useQuery } from "@tanstack/react-query";

/** 댓글 요청 쿼리 */
export const useGetCommentListQuery = ({ postType, postId }: PostTargetParams) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEYS[postType](postId),
    queryFn: () => getCommentListApi({ postType, postId }),
  });
};

/** 대댓글 요청 쿼리 */
export const useGetReplyCommentsQuery = ({ postType, postId }: PostTargetParams) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEYS.reply[postType](postId),
    queryFn: () => getReplyCommentsApi({ postType, postId }),
  });
};
