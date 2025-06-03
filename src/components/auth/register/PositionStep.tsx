"use client";

import DropDown from "@/components-temp/ui/DropDown";
import { POSITIONS } from "@/constants/filterOptions";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";

const PositionStep = ({ position, setPosition }: { position: string; setPosition: (position: string) => void }) => {
  const { isOpen: isDropDownOpen, open: openDropDown, close: closeDropDown } = useDisclosure();

  return (
    <div className="mt-18">
      <div className="title-24-b mb-80">
        <div>업무 분야와 경력에 맞춰</div>
        <div>딱 맞는 정보를 추천해드릴게요!</div>
      </div>
      <span className="body-16-b mb-12">직무를 입력해주세요</span>
      <DropDown
        setValue={setPosition}
        value={position}
        options={POSITIONS}
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
