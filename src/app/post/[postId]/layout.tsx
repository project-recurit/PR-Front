import Header from "@/components/layout/Header";
import PostDetailBottomBar from "@/components/post-detail/PostDetailBottomBar";
import type { ReactNode } from "react";

interface PostDetailLayoutProps {
  children: Readonly<ReactNode>;
}

const PostDetailLayout = ({ children }: PostDetailLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <PostDetailBottomBar />
    </>
  );
};

export default PostDetailLayout;
