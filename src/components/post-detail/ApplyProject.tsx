"use client";

import ActionBotton from "../ui/ActionBotton";
import { applayProject } from "@/actions/applyProjectActions";
import { ChevronDown } from "@/assets/svgs/icons";
import { useState } from "react";

interface ApplyProjectProps {
  closeModal: () => void;
}

const ApplyProject = ({ closeModal }: ApplyProjectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const options = ["게임", "기획", "디자이너", "모바일/APP", "백엔드", "프론트엔드"];

  return (
    <div className="bg-white rounded-6 p-24 gap-10">
      <div className="flex flex-col gap-8 items-center">
        <h2>저장된 지원서로 지원할까요?</h2>
        <div>지원하시는 직무를 선택해주세요!</div>
        <div>지원하기 전 지원서를 수정할 수 있어요.</div>
      </div>
      <div className="border border-black-400 rounded-8 px-16 py-8 w-272 mt-18">
        <button
          className="flex w-full justify-between"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className={selected ? "text-black" : isDropdownOpen ? "text-black" : "text-black-400"}>
            {selected ?? "직무 선택"}
          </span>
          <ChevronDown className="w-24 h-24"/>
        </button>
        {isDropdownOpen && (
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsDropdownOpen(false);
                }}
                className="hover:bg-gray-100 px-4 py-2"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-16 mt-24">
        <ActionBotton
          label="취소하기"
          color="white"
          onClick={closeModal}
        />
        <ActionBotton
          label="지원하기"
          onClick={() => applayProject(selected)}
        />
      </div>
    </div>
  );
};

export default ApplyProject;
