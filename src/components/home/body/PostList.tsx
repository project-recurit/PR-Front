"use client";

import { ChevronDown } from "@/assets/svgs/icons";
import PJLabel from "@/components/home/body/PJLabel";
import PRLabel from "@/components/home/body/PRLabel";
import PostInfo from "@/components/layout/PostInfo";
import ROUTES from "@/constants/routes";
import { useGetPostsQuery } from "@/hooks/tanstack/queries/useGetPosts";
import type { PostType, PJPost, PRPost } from "@/types/postTypes";
import Link from "next/link";

interface PostListProps {
  selectedMenu: PostType;
  appliedFilters: Set<string>;
}

const PostList = ({ selectedMenu, appliedFilters }: PostListProps) => {
  console.log("[㏒] appliedFilters =>", appliedFilters);
  const { data: postData, isPending, isError, error } = useGetPostsQuery({ postType: selectedMenu });

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>Loading...</div>;

  if (isError) throw new Error(error.message);

  return (
    <div className="flex w-full flex-col bg-black-100 px-16 pb-12">
      <div className="my-12 flex justify-end px-16 py-12">
        <button className="flex items-center gap-4 px-8 py-4">
          <span className="caption-12-s">최신순</span>
          <ChevronDown className="h-16 w-16" />
        </button>
      </div>
      <section className="flex w-full flex-col gap-y-12">
        {postData.map((post) => {
          const postInfo = {
            nickname: post.nickname,
            modifiedAt: post.modifiedAt,
            viewCount: post.viewCount,
            commentCount: post.commentCount,
            favoriteCount: post.favoriteCount,
          };
          return (
            <Link
              href={ROUTES.postDetail(post.id, selectedMenu)}
              key={post.id}
            >
              <PostInfo {...postInfo}>
                {selectedMenu === "PJ" ? <PJLabel post={post as PJPost} /> : <PRLabel post={post as PRPost} />}
              </PostInfo>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default PostList;
