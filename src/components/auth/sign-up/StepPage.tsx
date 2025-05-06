"use client";

import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import StepLabel from "./StepLabel";
import ThirdStep from "./ThirdStep";
import { ChevronLeft, XClose } from "@/assets/icons";
import Button from "@/components/common/ui/Button";
import { useSignUp } from "@/hooks/sign-UpStep";
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
  } = useSignUp();

  return (
    <form className="w-full h-full pb-32 grid grid-rows-[90px_20px_auto_50px] sm:max-h-[900px]">
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
      <Button
        size="m"
        onClick={handleNextStep}
        type="button"
        disabled={controlDisabled()}
      >
        {step === 2 ? "시작하기" : "계속"}
      </Button>
    </form>
  );
};

export default StepPage;
