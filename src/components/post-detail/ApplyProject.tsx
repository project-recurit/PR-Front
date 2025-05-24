"use client";

import Botton from "../ui/Botton";
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
    <div className="gap-10 p-24 rounded-6">
      <div className="flex flex-col items-center gap-8">
        <h2>저장된 지원서로 지원할까요?</h2>
        <div>지원하시는 직무를 선택해주세요!</div>
        <div>지원하기 전 지원서를 수정할 수 있어요.</div>
      </div>
      <div className="px-16 py-8 border border-black-400 rounded-8 w-272 mt-18">
        <button
          className="flex justify-between w-full"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className={selected ? "text-black" : isDropdownOpen ? "text-black" : "text-black-400"}>
            {selected ?? "직무 선택"}
          </span>
          <ChevronDown className="w-24 h-24" />
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
                className="px-4 py-2 hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-16 mt-24">
        <Botton
          color="white"
          onClick={closeModal}
        >
          취소하기
        </Botton>
        <Botton onClick={() => applayProject(selected)}>지원하기</Botton>
      </div>
    </div>
  );
};

export default ApplyProject;
