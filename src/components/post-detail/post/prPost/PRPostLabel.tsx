import CardLabel from "@/components/ui/CardLabel";
import TechStackLabel from "@/components/ui/StackLabel";
import { POSITION_LABEL, WORK_TYPE_LABEL, type PRPost } from "@/types/postTypes";

interface PRLabelProps {
  post: PRPost;
}

const PRPostLabel = ({ post }: PRLabelProps) => {
  return (
    <>
      <div className="caption-12-r grid grid-cols-[70px_1fr] items-center gap-y-10">
        <CardLabel
          title="포지션"
          value={POSITION_LABEL[post.position]}
        />
        <TechStackLabel stacks={post.techStacks} />
        <CardLabel
          title="선호 방식"
          value={WORK_TYPE_LABEL[post.workType]}
        />
      </div>
    </>
  );
};

export default PRPostLabel;
