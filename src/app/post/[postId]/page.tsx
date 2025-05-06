import BottomFixedBar from "@/components/layout/BottomFixedBar";
import CommentSection from "@/components/postDetail/comment/CommentSection";
import PostSection from "@/components/postDetail/post/PostSection";
import ActionBotton from "@/components/ui/ActionBotton";
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
  const { type } = use(searchParams);
  return (
    <div className="bg-white">
      <PostSection
        postId={postId}
        postType={type}
      />
      <CommentSection postId={postId} />
      <BottomFixedBar>
        <ActionBotton label="채팅하기" />
        <ActionBotton label="지원하기" />
      </BottomFixedBar>
    </div>
  );
};

export default PostDetailPage;
