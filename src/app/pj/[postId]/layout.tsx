import Header from "@/components/layout/Header";
import PJPostBottomBar from "@/components/post-detail/post/pjPost/PJPostBottomBar";
import type { ReactNode } from "react";

interface PostDetailLayoutProps {
  children: Readonly<ReactNode>;
}

const PostDetailLayout = ({ children }: PostDetailLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <PJPostBottomBar />
    </>
  );
};

export default PostDetailLayout;
