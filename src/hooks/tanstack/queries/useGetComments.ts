import COMMENT_QUERY_KEYS from "../queryKeys/commentQueryKeys";
import { getCommentListApi, getReplyCommentsApi } from "@/apis/commentApis";
import type { ParentTargetParams, PostTargetParams } from "@/types";
import { useQuery } from "@tanstack/react-query";

/** 댓글 요청 쿼리 */
export const useGetCommentListQuery = ({ postType, postId }: PostTargetParams) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEYS[postType](postId),
    queryFn: () => getCommentListApi({ postType, postId }),
  });
};

/** 대댓글 요청 쿼리 */
export const useGetReplyCommentsQuery = ({ postType, parentId }: ParentTargetParams) => {
  return useQuery({
    queryKey: COMMENT_QUERY_KEYS.reply[postType](parentId),
    queryFn: () => getReplyCommentsApi({ postType, parentId }),
    enabled: false,
  });
};
