import Card from "./Card";
import CardLabel from "./CardLabel";
import TechStackLabel from "./StackLabel";
import { PRPost } from "@/types/postTypes";

interface PRCardProps {
  post: PRPost;
}

const PRCard = ({ post }: PRCardProps) => {
  return (
    <Card>
      <p className="body-16-s overflow-line2">{post.title}</p>
      <div className="caption-r grid grid-cols-[70px_1fr] items-center gap-y-10">
        <CardLabel
          title="포지션"
          value="프론트엔드"
        />
        <TechStackLabel stacks={post.techStacks} />
        <CardLabel
          title="선호 방식"
          value="오프라인"
        />
      </div>
    </Card>
  );
};

export default PRCard;
