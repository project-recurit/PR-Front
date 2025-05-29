"use client";

import SkillBadge from "./SkillBadge";
import SearchBar from "@/components/ui/SearchBar";
import type { TechStack } from "@/types/commonTypes";
import { useState } from "react";

interface TechStackStepProps {
  allTechStacks: TechStack[];
  selectedStacks: Set<number>;
  setTechStackId: (stackId: number) => void;
}

const TechStackStep = ({ allTechStacks, selectedStacks, setTechStackId }: TechStackStepProps) => {
  const [value, setValue] = useState("");

  const serchList = () => {
    return allTechStacks.filter((s) => s.name.toLowerCase().includes(value.toLowerCase()));
  };

  return (
    <div className="mt-18">
      <p className="title-24-b mb-80">
        보유하고 있는
          <br />
        스킬을 등록해주세요.
      </p>
      <SearchBar
        label="보유하신 스킬을 등록해주세요"
        placeholder="스킬을 검색해보세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {value &&
          (serchList().length > 0 ? (
            <div className="overflow-y-scroll max-h-[312px] absolute top-76 bg-white w-full flex flex-col justify-between left-0 rounded-b-8 border-b-1 border-l-1 border-r-1 border-black-400">
              {serchList().map((s) => (
                <div
                  className="py-14 px-16"
                  key={s.id}
                  onClick={() => setTechStackId(s.id)}
                >
                  {s.name}
                </div>
              ))}
            </div>
          ) : (
            <div className="absolute top-76 bg-white w-full left-0 rounded-b-8 border-b-1 border-l-1 border-r-1 border-black-400 p-14 ">
              결과가 없습니다.
            </div>
          ))}
      </SearchBar>
      <div className="mt-18">
        <p className="mb-12 body-14-m">선택한 스킬</p>
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
