import CommentSection from "@/components/post-detail/comment/CommentSection";
import PRPostSection from "@/components/post-detail/post/prPost/PRPostSection";
import { use } from "react";

interface PostDetailPageProps {
  params: Promise<{ postId: string }>;
}

const PrPostDetailPage = ({ params }: PostDetailPageProps) => {
  const { postId } = use(params);

  return (
    <main className="mb-68">
      <PRPostSection postId={postId} />
      <CommentSection
        postType={"PR"}
        postId={postId}
      />
    </main>
  );
};

export default PrPostDetailPage;
