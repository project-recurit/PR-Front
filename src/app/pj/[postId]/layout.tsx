import Header from "@/components/layout/Header";
import PJPostBottomBar from "@/components/post-detail/post/pjPost/PJPostBottomBar";
import { ReactNode, use } from "react";

interface PostDetailLayoutProps {
  children: Readonly<ReactNode>;
  params: Promise<{ postId: string }>;
}

const PostDetailLayout = ({ children, params }: PostDetailLayoutProps) => {
  const { postId: postIdString } = use(params);
  const postId = parseInt(postIdString, 10);

  return (
    <>
      <Header />
      {children}
      <PJPostBottomBar id={postId} />
    </>
  );
};

export default PostDetailLayout;
