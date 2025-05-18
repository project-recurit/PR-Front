import POST_QUERY_KEYS from "../queryKeys/postQueryKeys";
import { getPostDetail, getPosts } from "@/actions/postActions";
import type { MainCategory } from "@/types/filterTypes";
import { useQuery } from "@tanstack/react-query";

/** 게시물 리스트 요청 쿼리 */
export const useGetPostsQuery = ({ postType }: { postType: MainCategory }) => {
  return useQuery({
    queryKey: POST_QUERY_KEYS[postType],
    queryFn: () => getPosts({ postType }),
  });
};

/** 게시물 상세 요청 쿼리 */
export const useGetPostDetailQuery = ({ postType, postId }: { postType: MainCategory; postId: string }) => {
  return useQuery({
    queryKey: POST_QUERY_KEYS.detail[postType](postId),
    queryFn: () => getPostDetail({ postType, postId }),
  });
};
