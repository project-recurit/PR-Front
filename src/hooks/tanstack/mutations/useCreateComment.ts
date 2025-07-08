import COMMENT_QUERY_KEYS from "../queryKeys/commentQueryKeys";
import { createCommentApi } from "@/apis/commentApis";
import type { PostTargetParams } from "@/types/api/paramsTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/** 댓글 작성 뮤테이트 */
export const useCreateCommentMutation = ({ postType, postId }: PostTargetParams) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ comment }: { comment: string }) => createCommentApi({ postType, postId, comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: COMMENT_QUERY_KEYS[postType](postId),
      });
    },
  });
};
