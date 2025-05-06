import Header from "@/components/layout/Header";

interface PostDetailLayoutProps {
  children: Readonly<React.ReactNode>;
}

const PostDetailLayout = ({ children }: PostDetailLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PostDetailLayout;
