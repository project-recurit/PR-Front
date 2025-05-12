import PostDetailBottomBar from "@/components/post-detail/PostDetailBottomBar";
import CommentSection from "@/components/post-detail/comment/CommentSection";
import PostSection from "@/components/post-detail/post/PostSection";
import type { MainCategory } from "@/types/filterTypes";
import { use } from "react";

interface PostDetailPageProps {
  params: Promise<{ postId: string }>;
  searchParams: Promise<{
    type: MainCategory;
  }>;
}

const PostDetailPage = ({ params, searchParams }: PostDetailPageProps) => {
  const { postId } = use(params);
  const { type: postType } = use(searchParams);
  const isPJPost = postType === "PJ";
  return (
    <div className="bg-white">
      <PostSection
        postId={postId}
        postType={postType}
        isPJPost={isPJPost}
      />
      <CommentSection
        postType={postType}
        postId={postId}
      />
      <PostDetailBottomBar isPJPost={isPJPost} />
    </div>
  );
};

export default PostDetailPage;
