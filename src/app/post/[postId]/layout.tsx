import Header from "@/components-temp/layout/Header";
import PostDetailBottomBar from "@/components-temp/post-detail/PostDetailBottomBar";
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
