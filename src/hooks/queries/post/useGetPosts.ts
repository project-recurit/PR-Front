import queryKeys from "../queryKeys";
import { getPJPosts } from "@/actions/postActions";
import type { POST_TYPE } from "@/assets/constantData";
import { handleError } from "@/utils/handleError";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = (postType: POST_TYPE) => {
  return useQuery({
    queryKey: queryKeys.post[postType](),
    queryFn: () => handleError(getPJPosts)(postType),
  });
};
