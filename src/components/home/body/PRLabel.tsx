import CardLabel from "@/components/ui/CardLabel";
import TechStackLabel from "@/components/ui/StackLabel";
import type { PRPost } from "@/types/postTypes";

interface PRLabelProps {
  post: PRPost;
}

const PRLabel = ({ post }: PRLabelProps) => {
  return (
    <>
      <span className="body-16-s">{post.title}</span>
      <div className="caption-12-r grid grid-cols-[70px_1fr] items-center gap-y-10">
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
    </>
  );
};

export default PRLabel;
