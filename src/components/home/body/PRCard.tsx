import PostCard from "@/components/layout/PostCard";
import CardLabel from "@/components/ui/CardLabel";
import TechStackLabel from "@/components/ui/StackLabel";
import { PRPost } from "@/types/postTypes";

interface PRCardProps {
  post: PRPost;
}

const PRCard = ({ post }: PRCardProps) => {
  return (
    <PostCard>
      <p className="body-16-s overflow-line2">{post.title}</p>
      <div className="caption-r grid grid-cols-[70px_1fr] items-center gap-y-10">
        <CardLabel
          title="포지션"
          value={post.position}
        />
        <TechStackLabel stacks={post.techStacks} />
        <CardLabel
          title="선호 방식"
          value={post.workType}
        />
      </div>
    </PostCard>
  );
};

export default PRCard;
