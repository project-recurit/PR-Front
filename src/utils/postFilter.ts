import useCategoryStore from "@/store/categoryStore";
import { PJpost, PRpost } from "@/type/type";

export const useFilteredPosts = (
  posts?: (PRpost | PJpost)[],
  query?: string
) => {
  const { selectedMenu } = useCategoryStore();

  const filteredPosts = posts?.filter((post) => {
    // 카테고리 필터
    if (selectedMenu === "전체") {
      return true;
    }
    if (selectedMenu === "PJ") {
      return "content" in post;
    }
    if (selectedMenu === "PR") {
      return !("content" in post);
    }

    return false;
  });

  // 검색 필터
  const viewPosts = query
    ? filteredPosts?.filter((post) => {
        const lowerCaseQuery = query.toLowerCase();
        if ("content" in post) {
          return (
            post.title.toLowerCase().includes(lowerCaseQuery) ||
            post.content.toLowerCase().includes(lowerCaseQuery)
          );
        }
        return post.title.toLowerCase().includes(lowerCaseQuery);
      })
    : filteredPosts;

  return viewPosts;
};
