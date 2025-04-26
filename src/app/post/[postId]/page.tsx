import BottomFixedBar from "@/components/Layout/BottomFixedBar";
import CommentSection from "@/components/PostDetail/comment/CommentSection";
import PostSection from "@/components/PostDetail/post/PostSection";
import { use } from "react";

interface PostDetailPageProps {
  params: Promise<{ postId: string }>;
  searchParams: Promise<{
    type: "pj" | "pr";
  }>;
}

const PostDetailPage = ({ params, searchParams }: PostDetailPageProps) => {
  const { postId } = use(params);
  const { type } = use(searchParams);
  return (
    <div className="bg-white">
      <PostSection />
      <CommentSection />
      <BottomFixedBar postType={type} />
    </div>
  );
};

export default PostDetailPage;
