import { Plus } from "@/assets/svgs/icons";
import CardLabel from "@/components/ui/CardLabel";
import TechStackLabel from "@/components/ui/StackLabel";
import { POSITION_LABEL, WORK_TYPE_LABEL } from "@/types";

const page = () => {
  const resumeList = [1, 2, 3];

  return (
    <ol className="flex h-full flex-col gap-4 bg-background px-16 py-20">
      {resumeList.map((item) => (
        <li
          key={`my_resume_${item}`}
          className="rounded-xl border bg-white px-20 py-12 shadow-sm"
        >
          <h2 className="body-16-s mb-12 text-black-1000">제목 어쩌고 저쩌고제목</h2>
          <div className="caption-12-r grid grid-cols-[70px_1fr] items-center gap-y-8">
            <CardLabel
              title="포지션"
              value={POSITION_LABEL.BACKEND}
            />
            <TechStackLabel
              stacks={[
                { id: 1, name: "C" },
                { id: 6, name: "TypeScript" },
                { id: 8, name: "Ruby" },
              ]}
              visibleCount={3}
            />
            <CardLabel
              title="선호 방식"
              value={WORK_TYPE_LABEL.OFFLINE}
            />
          </div>
        </li>
      ))}
      <button className="mt-4 flex items-center justify-center gap-10 rounded-xl border bg-white px-20 py-12 shadow-sm">
        <Plus className={"h-14 w-14 stroke-black-1000"} />
        <span className="title-18-r text-black-1000"> 추가하기</span>
      </button>
    </ol>
  );
};

export default page;
