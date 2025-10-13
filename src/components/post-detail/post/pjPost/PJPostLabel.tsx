import CardLabel from "@/components/ui/CardLabel";
import TechStackLabel from "@/components/ui/StackLabel";
import { DURATION_LABEL, PJPost, POSITION_LABEL, WORK_TYPE_LABEL } from "@/types/postTypes";

interface PJPostLabelProps {
  post: PJPost;
}

const PJPostLabel = ({ post }: PJPostLabelProps) => {
  return (
    <div className="flex flex-col gap-y-8">
      {post.positions.map(({ position, capacity }, index) => (
        <div
          key={`pj_post_${post.id}_position_${index}`}
          className="caption-12-r grid grid-cols-2 items-center gap-y-10"
        >
          <span className="caption-12-r grid grid-cols-[70px_1fr] items-center gap-y-10">
            <CardLabel
              title="포지션"
              value={POSITION_LABEL[position]}
            />
          </span>
          <span className="caption-12-r grid grid-cols-[70px_1fr] items-center gap-y-10">
            <CardLabel
              title="모집인원"
              value={`${capacity}명`}
            />
          </span>
        </div>
      ))}

      <div className="caption-12-r grid grid-cols-[70px_1fr] items-center gap-y-10">
        <TechStackLabel stacks={post.techStacks} />
        <CardLabel
          title="진행 방식"
          value={WORK_TYPE_LABEL[post.workType]}
        />
        <CardLabel
          title="진행 기간"
          value={DURATION_LABEL[post.estimatedDuration]}
        />
        <CardLabel
          title="모집 마감"
          value={post.deadLine}
        />
      </div>
    </div>
  );
};

export default PJPostLabel;
