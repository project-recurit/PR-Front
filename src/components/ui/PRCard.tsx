import Card from "./Card";
import CardLabel from "./CardLabel";
import StackLabel from "./StackLabel";
import { PRpost } from "@/types/type";

const PRCard = ({ post }: { post: PRpost }) => {
  return (
    <Card>
      <p className="body-16-s overflow-line2">{post.title}</p>
      <div className="caption-r grid grid-cols-[70px_1fr] items-center gap-y-10">
        <CardLabel
          title="포지션"
          value="프론트엔드"
        />
        <StackLabel stacks={post.techStacks} />
        <CardLabel
          title="선호 방식"
          value="오프라인"
        />
        <CardLabel
          title="선호 기간"
          value="3개월"
        />
      </div>
    </Card>
  );
};

export default PRCard;
