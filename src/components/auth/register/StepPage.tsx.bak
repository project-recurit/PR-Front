"use client";

import type { TechStack } from "@/types/commonTypes";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import StepLabel from "./StepLabel";
import ThirdStep from "./ThirdStep";
import Header from "@/components/layout/Header";
import Botton from "@/components/ui/Botton";
import { useRegister } from "@/hooks/registerStep";

const StepPage = ({ techStacks }: { techStacks: TechStack[] }) => {
  const {
    step,
    handleNextStep,
    handelPrevStep,
    setValue,
    positionValue,
    // controlDisabled,
    techStackIds,
    setTechStackIds,
    nicknameValue,
  } = useRegister();

  return (
    <form className="w-full h-full pb-32 grid grid-rows-[90px_20px_auto_50px] sm:max-h-[900px]">
      <Header backButtonEvent={handelPrevStep} />

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
        // disabled={controlDisabled()}
      >
        {step === 2 ? "시작하기" : "계속"}
      </Botton>
    </form>
  );
};

export default StepPage;
