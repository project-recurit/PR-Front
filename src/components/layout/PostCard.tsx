import Engagement from "./Engagement";
import PostProfile from "./PostProfile";

interface PostCardProps {
  children: React.ReactNode;
  userNickname?: string;
  modifiedAt?: string;
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
}

//TODO - 카드 스타일 상수화 후 카드 컴포넌트 삭제
const PostCard = ({ children, userNickname, modifiedAt, viewCount, commentCount, favoriteCount }: PostCardProps) => {
  return (
    <section className="flex w-full flex-col gap-y-12 rounded-xl border bg-white px-20 py-12 shadow-sm">
      <PostProfile
        userNickname={userNickname}
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

export default PostCard;
