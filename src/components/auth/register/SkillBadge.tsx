import { XClose } from "@/assets/svgs/icons";

interface SkillBadgeProps {
  stackName: string;
  onClick: () => void;
}

const SkillBadge = ({ stackName, onClick }: SkillBadgeProps) => {
  return (
    <div className="flex items-center rounded-8 border-1 border-black-500 px-16 py-8">
      <span>{stackName}</span>
      <button>
        <XClose
          className="ml-8 w-16"
          onClick={onClick}
        />
      </button>
    </div>
  );
};

export default SkillBadge;
