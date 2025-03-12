import { XClose } from "@/assets/icons";

const SkillBadge = ({ children }: { children: string }) => {
  return (
    <div className="flex items-center rounded-8 border-1 border-black-500 px-16 py-8">
      <p>{children}</p>
      <button>
        <XClose className="ml-8 w-16" />
      </button>
    </div>
  );
};

export default SkillBadge;
