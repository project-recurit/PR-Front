"use client";

import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import StepLabel from "./StepLabel";
import ThirdStep from "./ThirdStep";
import { ChevronLeft, XClose } from "@/assets/svgs/icons";
import Botton from "@/components/ui/Botton";
import { useRegister } from "@/hooks/registerStep";
import { TechStack } from "@/types/type";

const StepPage = ({ techStacks }: { techStacks: TechStack[] }) => {
  const {
    step,
    handleNextStep,
    handelPrevStep,
    setValue,
    positionValue,
    controlDisabled,
    techStackIds,
    setTechStackIds,
    nicknameValue,
  } = useRegister();

  return (
    <form className="w-full h-full pb-32 grid grid-rows-[90px_20px_auto_50px] sm:max-h-[900px]">
      {/* FIXME - 공통 헤더 컴포넌트 사용 */}
      <div className="flex items-center justify-between h-48">
        <ChevronLeft
          onClick={handelPrevStep}
          className="cursor-pointer "
        />
        <XClose className="w-32" />
      </div>

      <StepLabel step={step} />

      {step === 0 ? (
        <FirstStep
          position={positionValue}
          setPosition={(v: string) => setValue("position", v)}
        />
      ) : step === 1 ? (
        <SecondStep
          stacks={techStacks}
          techStackIds={techStackIds}
          setTechStackIds={(stackId: number) => setTechStackIds(stackId)}
        />
      ) : (
        <ThirdStep
          nickname={nicknameValue}
          setNickname={(e: React.ChangeEvent<HTMLInputElement>) => setValue("nickname", e.target.value)}
        />
      )}

      <Botton
        size="large"
        onClick={handleNextStep}
        type="button"
        disabled={controlDisabled()}
      >
        {step === 2 ? "시작하기" : "계속"}
      </Botton>
    </form>
  );
};

export default StepPage;
