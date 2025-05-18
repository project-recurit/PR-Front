import QUERY_KEYS from "../queries/queryKeys";
import { createComment } from "@/actions/commentActions";
import type { MainCategory } from "@/types/filterTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/** 댓글 작성 뮤테이트 */
export const useCreateComment = ({ postType, postId }: { postType: MainCategory; postId: string }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ comment }: { comment: string }) => createComment({ postType, postId, comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.comments.root(postId),
      });
    },
  });
};
