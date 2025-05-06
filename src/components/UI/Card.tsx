import CardFooter from "./CardFooter";
import CardProfile from "./CardProfile";

interface CardLayoutProps {
  children: React.ReactNode;
  userNickname?: string;
  modifiedAt?: string;
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
}

const Card = ({ children, userNickname, modifiedAt, viewCount, commentCount, favoriteCount }: CardLayoutProps) => {
  return (
    <section className="flex w-full flex-col gap-y-12 rounded-xl border bg-white px-20 py-12 shadow-sm">
      <CardProfile
        userNickname={userNickname}
        modifiedAt={modifiedAt}
      />
      {children}
      <CardFooter
        viewCount={viewCount}
        commentCount={commentCount}
        favoriteCount={favoriteCount}
      />
    </section>
  );
};

export default Card;
