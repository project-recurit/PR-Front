import POST_QUERY_KEYS from "../queryKeys/postQueryKeys";
import { getPostDetailApi, getPostListApi } from "@/apis/postApis";
import type { PostTargetParams, PostTypeParams } from "@/types/api/paramsTypes";
import type { PostType } from "@/types/postTypes";
import { useQuery } from "@tanstack/react-query";

/** 게시물 리스트 요청 쿼리 */
export const useGetPostsQuery = <T extends PostType>({ postType }: PostTypeParams<T>) => {
  return useQuery({
    queryKey: POST_QUERY_KEYS[postType],
    queryFn: () => getPostListApi({ postType }),
  });
};

/** 게시물 상세 요청 쿼리 */
export const useGetPostDetailQuery = <T extends PostType>({ postType, postId }: PostTargetParams<T>) => {
  return useQuery({
    queryKey: POST_QUERY_KEYS.detail[postType](postId),
    queryFn: () => getPostDetailApi({ postType, postId }),
  });
};
