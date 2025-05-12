import PostCard from "@/components/layout/PostCard";
import CardLabel from "@/components/ui/CardLabel";
import TechStackLabel from "@/components/ui/StackLabel";
import type { PJPost } from "@/types/postTypes";

interface PJCardProps {
  post: PJPost;
}

const PJCard = ({ post }: PJCardProps) => {
  const cardProps = {
    userNickname: post.userNickname,
    modifiedAt: post.modifiedAt,
    viewCount: post.viewCount,
    commentCount: post.commentCount,
    favoriteCount: post.favoriteCount,
  };
  return (
    <PostCard {...cardProps}>
      <p className="body-16-s overflow-line2">{post.title}</p>
      <div className="caption-r grid grid-cols-[70px_1fr] items-center gap-y-10">
        <CardLabel
          title="모집 인원"
          value={"데이터 안 넘어옴"}
        />
        <CardLabel
          title="포지션"
          value={"데이터 안 넘어옴"}
        />
        <TechStackLabel stacks={post.techStacks} />
        <CardLabel
          title="진행 방식"
          value={"데이터 안 넘어옴"}
        />
        <CardLabel
          title="진행 기간"
          value={"데이터 안 넘어옴"}
        />
        <CardLabel
          title="모집 마감"
          value={"데이터 안 넘어옴"}
        />
      </div>
    </PostCard>
  );
};

export default PJCard;
