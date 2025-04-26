import queryKeys from "../queryKeys";
import { getPosts } from "@/actions/postActions";
import type { MainCategory } from "@/types/filterTypes";
import { useQuery } from "@tanstack/react-query";

/** 게시물 리스트 요청 쿼리 */
export const useGetPosts = (postType: MainCategory) => {
  return useQuery({
    queryKey: queryKeys.posts[postType](),
    queryFn: () => getPosts(postType),
  });
};

/** 게시물 상세 요청 쿼리 */
