import { DUTY_CATEGORY } from "@/assets/constantData";
import DropDown from "@/components/common/DropDown";

const FirstStep = () => {
  return (
    <div className="mt-18">
      <p className="title-24-b mb-80">
        업무 분야와 경력에 맞춰 <br />딱 맞는 정보를 추천해드릴게요!
      </p>
      <DropDown
        menu={DUTY_CATEGORY}
        label="직무를 입력해주세요"
      >
        직무 선택
      </DropDown>
    </div>
  );
};

export default FirstStep;
