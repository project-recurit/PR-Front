import { Plus } from "@/assets/svgs/icons";
import type { Post } from "@/types/postTypes";
import { getTechStackColor } from "@/utils/techStackColor";

interface StackLabelProps {
  stacks: Post["techStacks"];
  visibleCount?: number;
  showTitle?: boolean;
}

const TechStackLabel = ({ stacks, visibleCount, showTitle = true }: StackLabelProps) => {
  return (
    <>
      {showTitle && <p className="text-black-700">기술 스택</p>}
      <div className="flex items-center gap-x-4">
        <div className="flex gap-x-4">
          {stacks.slice(0, visibleCount).map(({ id, name }) => (
            <div
              className={`caption-12-r rounded-full px-8 py-2`}
              style={{ backgroundColor: getTechStackColor(id) }}
              key={id}
            >
              {name}
            </div>
          ))}
        </div>
        {!!visibleCount && stacks.length - visibleCount > 0 && (
          <div className={`caption-12-r flex items-center rounded-full bg-black-100 px-8 py-2`}>
            <Plus className={"h-10 w-10 stroke-black-1000"} />
            {" α"}
          </div>
        )}
      </div>
    </>
  );
};

export default TechStackLabel;
