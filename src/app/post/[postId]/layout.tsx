import Header from "@/components/layout/Header";
import PostDetailBottomBar from "@/components/post-detail/PostDetailBottomBar";

interface PostDetailLayoutProps {
  children: Readonly<React.ReactNode>;
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
