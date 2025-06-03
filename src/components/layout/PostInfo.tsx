import Engagement from "./Engagement";
import PostProfile from "./PostProfile";

interface PostInfoProps {
  children: React.ReactNode;
  userNickname?: string;
  modifiedAt?: string;
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
}

//TODO - 카드 스타일 상수화 후 카드 컴포넌트 삭제
const PostInfo = ({ children, userNickname, modifiedAt, viewCount, commentCount, favoriteCount }: PostInfoProps) => {
  return (
    <section className="flex flex-col w-full px-20 py-12 bg-white border shadow-sm gap-y-12 rounded-xl">
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

export default PostInfo;
