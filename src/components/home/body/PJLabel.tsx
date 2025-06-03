import CardLabel from "@/components-temp/ui/CardLabel";
import TechStackLabel from "@/components-temp/ui/StackLabel";
import type { PJPost } from "@/types/postTypes";

interface PJLabelProps {
  post: PJPost;
}

const PJLabel = ({ post }: PJLabelProps) => {
  return (
    <>
      <h3 className="body-16-s overflow-line2">{post.title}</h3>
      <div className="caption-12-r grid grid-cols-[70px_1fr] items-center gap-y-10">
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
    </>
  );
};

export default PJLabel;
