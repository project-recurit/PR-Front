import POST_QUERY_KEYS from "../queryKeys/postQueryKeys";
import { getPostDetailApi, getPostListApi } from "@/apis/postApis";
import type { PostType } from "@/types/postTypes";
import { useQuery } from "@tanstack/react-query";

/** 게시물 리스트 요청 쿼리 */
export const useGetPostsQuery = ({ postType }: { postType: PostType }) => {
  return useQuery({
    queryKey: POST_QUERY_KEYS[postType],
    queryFn: () => getPostListApi({ postType }),
  });
};

/** 게시물 상세 요청 쿼리 */
export const useGetPostDetailQuery = ({ postType, postId }: { postType: PostType; postId: string }) => {
  return useQuery({
    queryKey: POST_QUERY_KEYS.detail[postType](postId),
    queryFn: () => getPostDetailApi({ postType, postId }),
  });
};
