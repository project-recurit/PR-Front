"use client";

import { applayProjectApi } from "@/apis/applyProjectApis";
import { ChevronDown } from "@/assets/svgs/icons";
import Button from "@/components/ui/Button";
import { POSITIONS } from "@/constants/filterOptions";
import { FilterChip } from "@/types";
import { useState } from "react";

interface ApplyProjectProps {
  pjId: number;
  closeModal: () => void;
}

const ApplyProject = ({ pjId, closeModal }: ApplyProjectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPostion, setSelectedPosition] = useState<FilterChip | null>(null);

  const onClickApplyProject = async () => {
    // 로그인 안돼있으면 막기
    if (!selectedPostion) {
      return;
    }
    await applayProjectApi({ pjId, position: selectedPostion });
  };

  return (
    <div className="gap-10 rounded-6 bg-white p-24">
      <div className="flex flex-col items-center gap-8">
        <h2>저장된 지원서로 지원할까요?</h2>
        <div>지원하시는 직무를 선택해주세요!</div>
        <div>지원하기 전 지원서를 수정할 수 있어요.</div>
      </div>
      <div className="w-272 mt-18 rounded-8 border border-black-400 px-16 py-8">
        <button
          className="flex w-full justify-between"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className={selectedPostion ? "text-black" : isDropdownOpen ? "text-black" : "text-black-400"}>
            {selectedPostion?.title ?? "직무 선택"}
          </span>
          <ChevronDown className="h-24 w-24" />
        </button>
        {isDropdownOpen && (
          <ul>
            {POSITIONS.map((option) => (
              <li
                key={option.type}
                onClick={() => {
                  setSelectedPosition(option);
                  setIsDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100"
              >
                {option.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-24 flex gap-16">
        <Button
          color="white"
          onClick={closeModal}
        >
          취소하기
        </Button>
        <Button onClick={onClickApplyProject}>지원하기</Button>
      </div>
    </div>
  );
};

export default ApplyProject;
