"use client";

import DropDown from "@/components/ui/DropDown";
import { POSITION_OPTIONS } from "@/data/authData";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";

const PositionStep = ({ position, setPosition }: { position: string; setPosition: (position: string) => void }) => {
  const { isOpen: isDropDownOpen, open: openDropDown, close: closeDropDown } = useDisclosure();
  
  return (
    <div className="mt-18">
      <div className="title-24-b mb-80">
        <span>업무 분야와 경력에 맞춰</span>
        <span>딱 맞는 정보를 추천해드릴게요!</span>
      </div>
      <span className="mb-12 body-16-b">직무를 입력해주세요</span>
      <DropDown
        setValue={setPosition}
        value={position}
        options={POSITION_OPTIONS}
        isDropDownOpen={isDropDownOpen}
        openDropDown={openDropDown}
        closeDropDown={closeDropDown}
      >
        직무 선택
      </DropDown>
    </div>
  );
};

export default PositionStep;
