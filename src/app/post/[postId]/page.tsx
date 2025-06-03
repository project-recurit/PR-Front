import CommentSection from "@/components/post-detail/comment/CommentSection";
import PostSection from "@/components/post-detail/post/PostSection";
import type { PostType } from "@/types/postTypes";
import { use } from "react";

interface PostDetailPageProps {
  params: Promise<{ postId: string }>;
  searchParams: Promise<{
    type: PostType;
  }>;
}

const PostDetailPage = ({ params, searchParams }: PostDetailPageProps) => {
  const { postId } = use(params);
  const { type: postType } = use(searchParams);
  const isPJPost = postType === "PJ";
  return (
    <main className="mb-68">
      <PostSection
        postId={postId}
        postType={postType}
        isPJPost={isPJPost}
      />
      <CommentSection
        postType={postType}
        postId={postId}
      />
    </main>
  );
};

export default PostDetailPage;
