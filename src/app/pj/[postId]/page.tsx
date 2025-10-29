import CommentSection from "@/components/post-detail/comment/CommentSection";
import PJPostSection from "@/components/post-detail/post/pjPost/PJPostSection";
import { use } from "react";

interface PjPostDetailPageProps {
  params: Promise<{ postId: string }>;
}

const PjPostDetailPage = ({ params }: PjPostDetailPageProps) => {
  const { postId } = use(params);
  return (
    <main className="mb-68">
      <PJPostSection postId={postId} />
      <CommentSection
        postType={"PJ"}
        postId={postId}
      />
    </main>
  );
};

export default PjPostDetailPage;
