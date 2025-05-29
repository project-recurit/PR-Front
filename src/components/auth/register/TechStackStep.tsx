"use client";

import TechStackSearchBar from "./AutocompleteSearchBar";
import SkillBadge from "./SkillBadge";
import type { TechStack } from "@/types/commonTypes";

interface TechStackStepProps {
  allTechStacks: TechStack[];
  selectedStacks: Set<number>;
  selectTechStackId: (stackId: number) => void;
  removeTechStackId: (stackId: number) => void;
}

const TechStackStep = ({ allTechStacks, selectedStacks, selectTechStackId, removeTechStackId }: TechStackStepProps) => {
  console.count("lender");
  return (
    <div className="mt-18">
      <div className="title-24-b mb-80">
        <div>보유하고 있는</div>
        <div>스킬을 등록해주세요.</div>
      </div>
      <span className="mb-12 caption-16-b">보유하신 스킬을 등록해주세요</span>
      <div>
        <TechStackSearchBar
          allTechStacks={allTechStacks}
          selectTechStackId={selectTechStackId}
        />
      </div>
      <div className="mt-18">
        <span className="mb-12 body-14-m">선택한 스킬</span>
        <div className="flex flex-wrap w-full gap-x-8 gap-y-8">
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
