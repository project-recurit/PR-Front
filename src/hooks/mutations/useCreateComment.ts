import QUERY_KEYS from "../queries/queryKeys";
import { createComment } from "@/actions/commentActions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/** 댓글 작성 뮤테이트 */
export const useCreateComment = ({ postId }: { postId: string }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ comment }: { comment: string }) => createComment({ postId, comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.comments.root(postId),
      });
    },
  });
};
