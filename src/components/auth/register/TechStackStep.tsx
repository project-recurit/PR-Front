"use client";

import SkillBadge from "./SkillBadge";
import TechStackSearchBar from "./TechStackSearchBar";
import { REGISTER_ERROR_MESSAGE_STYLE } from "@/styles/tailwindStyles/registerStyles";
import type { TechStack } from "@/types/techStackTypes";

interface TechStackStepProps {
  selectedStacks: TechStack[];
  addTechStack: (techStack: TechStack) => void;
  removeTechStack: (techStack: TechStack) => void;
  validateErrorMessage: string;
}

const TechStackStep = ({ selectedStacks, addTechStack, removeTechStack, validateErrorMessage }: TechStackStepProps) => {
  console.count("lender");
  return (
    <div className="mt-18 flex h-full flex-col">
      <div className="h-400">
        <div className="title-24-b mb-80">
          <div>보유하고 있는</div>
          <div>스킬을 등록해주세요.</div>
        </div>
        <span className="caption-16-b mb-12">보유하신 스킬을 등록해주세요</span>
        <TechStackSearchBar addTechStack={addTechStack} />
        {validateErrorMessage && <span className={REGISTER_ERROR_MESSAGE_STYLE}>{validateErrorMessage}</span>}
      </div>

      <div className="shrink-0">
        <span className="body-14-m mb-12">선택한 스킬</span>
        <div className="flex w-full flex-wrap gap-x-8 gap-y-8">
          {selectedStacks.map((stack) => (
            <SkillBadge
              key={stack.id}
              stackName={stack.name}
              onClick={() => {
                removeTechStack(stack);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackStep;
