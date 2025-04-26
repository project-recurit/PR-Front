interface PostDetailLayoutProps {
  children: Readonly<React.ReactNode>;
}

const PostDetailLayout = ({ children }: PostDetailLayoutProps) => {
  return <>{children}</>;
};

export default PostDetailLayout;
