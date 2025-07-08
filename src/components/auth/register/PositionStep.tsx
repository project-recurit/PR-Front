"use client";

import DropDown from "@/components/ui/DropDown";
import { POSITIONS } from "@/constants/filterOptions";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";
import { REGISTER_ERROR_MESSAGE_STYLE } from "@/styles/tailwindStyles/registerStyles";

interface PositionStepProps {
  position: string;
  setPosition: (value: string) => void;
  validateErrorMessage: string;
}

const PositionStep = ({ position, setPosition, validateErrorMessage }: PositionStepProps) => {
  const { isOpen: isDropDownOpen, open: openDropDown, close: closeDropDown } = useDisclosure();

  return (
    <div className="mt-18">
      <div className="title-24-b mb-80">
        <div>업무 분야와 경력에 맞춰</div>
        <div>딱 맞는 정보를 추천해드릴게요!</div>
      </div>
      <span className="body-16-b mb-12">직무를 입력해주세요</span>
      <DropDown
        isDropDownOpen={isDropDownOpen}
        openDropDown={openDropDown}
        closeDropDown={closeDropDown}
        defaultValue="직무 선택"
        value={position}
        setValue={setPosition}
        options={POSITIONS}
      />
      {validateErrorMessage && <span className={REGISTER_ERROR_MESSAGE_STYLE}>{validateErrorMessage}</span>}
    </div>
  );
};

export default PositionStep;
