import queryKeys from "../queryKeys";
import { getPosts } from "@/actions/postActions";
import type { POST_TYPE } from "@/assets/constantData";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = (postType: POST_TYPE) => {
  return useQuery({
    queryKey: queryKeys.post[postType](),
    queryFn: () => getPosts(postType),
  });
};
