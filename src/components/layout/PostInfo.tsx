import Engagement from "./Engagement";
import PostProfile from "./PostProfile";
import type { ReactNode } from "react";

interface PostInfoProps {
  children: ReactNode;
  nickname: string;
  modifiedAt: string;
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
}

//TODO - 카드 스타일 상수화 후 카드 컴포넌트 삭제
const PostInfo = ({ children, nickname, modifiedAt, viewCount, commentCount, favoriteCount }: PostInfoProps) => {
  return (
    <section className="flex w-full flex-col gap-y-12 rounded-xl border bg-white px-20 py-12 shadow-sm">
      <PostProfile
        nickname={nickname}
        modifiedAt={modifiedAt}
      />
      {children}
      <Engagement
        viewCount={viewCount}
        commentCount={commentCount}
        favoriteCount={favoriteCount}
      />
    </section>
  );
};

export default PostInfo;
