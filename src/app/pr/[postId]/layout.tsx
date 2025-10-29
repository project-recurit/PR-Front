import Header from "@/components/layout/Header";
import PRPostBottomBar from "@/components/post-detail/post/prPost/PRPostBottomBar";
import type { ReactNode } from "react";

interface PostDetailLayoutProps {
  children: Readonly<ReactNode>;
}

const PostDetailLayout = ({ children }: PostDetailLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <PRPostBottomBar />
    </>
  );
};

export default PostDetailLayout;
