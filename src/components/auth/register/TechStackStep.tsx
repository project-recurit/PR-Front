"use client";

import TechStackSearchBar from "./AutocompleteSearchBar";
import type { TechStack } from "@/types/commonTypes";

interface TechStackStepProps {
  allTechStacks: TechStack[];
  selectedStacks: TechStack[];
  addTechStack: (techStack: TechStack) => void;
  removeTechStack: (techStack: TechStack) => void;
}

const TechStackStep = ({ allTechStacks, selectedStacks, addTechStack, removeTechStack }: TechStackStepProps) => {
  console.count("lender");
  return (
    <div className="mt-18">
      <div className="title-24-b mb-80">
        <div>보유하고 있는</div>
        <div>스킬을 등록해주세요.</div>
      </div>
      <span className="caption-16-b mb-12">보유하신 스킬을 등록해주세요</span>
      <div>
        <TechStackSearchBar
          allTechStacks={allTechStacks}
          addTechStack={addTechStack}
        />
      </div>
      <div className="mt-18">
        <span className="body-14-m mb-12">선택한 스킬</span>
        <div className="flex w-full flex-wrap gap-x-8 gap-y-8">
          {/* {[...selectedStacks].map((s) => (
            <SkillBadge
              onClick={() => {
                setTechStackId(s);
                setValue("");
              }}
              key={s}
            >
              {s}
            </SkillBadge>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStackStep;
