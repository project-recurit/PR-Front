import { PJpost } from "@/type/type";
import Card from "./Card";
import CardLabel from "./CardLabel";

const PJCard = ({ post }: { post: PJpost }) => {
  return (
    <Card>
      <p className="body-16-s overflow-line2">{post.title}</p>
      <CardLabel title="모집 인원" value="2명" />
      <CardLabel title="포지션" value="프론트엔드" />
      <CardLabel title="진행 방식" value="오프라인" />
      <CardLabel title="예상 기간" value={post.expectedPeriod} />
      <div className="flex gap-x-[8px] text-sm">
        {post.techStacks.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </Card>
  );
};

export default PJCard;
