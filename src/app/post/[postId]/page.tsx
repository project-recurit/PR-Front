import PostDetailBottomBar from "@/components/post-detail/PostDetailBottomBar";
import CommentSection from "@/components/post-detail/comment/CommentSection";
import PostSection from "@/components/post-detail/post/PostSection";
// import ActionBotton from "@/components/ui/ActionBotton";
// import { BOTTOM_FIEXED_BAR_STYLE } from "@/styles/tailwindStyles";
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
  const isPjPost = type === "PJ";
  return (
    <div className="bg-white">
      {/* <PostSection
        postId={postId}
        postType={type}
      />
      <CommentSection postId={postId} /> */}
      <PostDetailBottomBar isPjPost={isPjPost} />
    </div>
  );
};

export default PostDetailPage;
