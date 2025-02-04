import { PJpost } from "@/types/type";
import Card from "./Card";
import CardLabel from "./CardLabel";
import StackLabel from "./StackLabel";

const PJCard = ({ post }: { post: PJpost }) => {
  return (
    <Card>
      <p className="body-16-s overflow-line2">{post.title}</p>
      <div className="grid grid-cols-[70px_1fr] caption-r items-center gap-y-10 ">
        <CardLabel title="모집 인원" value="2명" />
        <StackLabel stacks={post.techStack1s} />
        <CardLabel title="포지션" value="프론트엔드" />
        <CardLabel title="진행 방식" value="오프라인" />
        <CardLabel title="예상 기간" value={post.expectedPeriod} />
      </div>
    </Card>
  );
};

export default PJCard;
