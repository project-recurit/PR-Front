import Header from "@/components/layout/Header";
import type { ReactNode } from "react";

interface PostDetailLayoutProps {
  children: Readonly<ReactNode>;
}

const ProfileLayout = ({ children }: PostDetailLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProfileLayout;
