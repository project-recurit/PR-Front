"use client";

import { Heart } from "@/assets/svgs/icons";
import Engagement from "@/components/layout/Engagement";
import PostProfile from "@/components/layout/PostProfile";
import type { PJPost, PRPost } from "@/types/postTypes";

interface PostSectionProps extends React.PropsWithChildren {
  postData: PJPost | PRPost;
}

const PostSection = ({ children, postData }: PostSectionProps) => {
  return (
    <section className="px-16">
      <div className="flex">
        <PostProfile
          nickname={postData.nickname}
          modifiedAt={postData.modifiedAt}
        />
        {/* <button className="ml-auto">
          <Heart className="h-24 w-24 fill-orange stroke-orange" />
          <Heart className="h-24 w-24 stroke-black-1000" />
        </button> */}
      </div>

      <h2 className="title-18-s mb-18 mt-16">{postData.title}</h2>
      <Engagement
        viewCount={postData.viewCount}
        commentCount={postData.commentCount}
        favoriteCount={postData.favoriteCount}
      />

      {/* body */}
      <hr className="-mx-16 mt-9 border-black-200" />
      {children}

      <hr className="-mx-16 border-black-200" />
      <div className="py-24">댓글 {postData.commentCount}</div>
    </section>
  );
};

export default PostSection;
