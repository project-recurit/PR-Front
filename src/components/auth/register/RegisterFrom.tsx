"use client";

import NicknameStep from "@/components/auth/register/NicknameStep";
import PositionStep from "@/components/auth/register/PositionStep";
import StepLabel from "@/components/auth/register/StepLabel";
import TechStackStep from "@/components/auth/register/TechStackStep";
import Header from "@/components/layout/Header";
import Botton from "@/components/ui/Botton";
import { useRegister } from "@/hooks/useRegister";
import type { TechStack } from "@/types/commonTypes";

interface RegisterFormProps {
  allTechStacks: TechStack[];
}

const RegisterForm = ({ allTechStacks }: RegisterFormProps) => {
  const {
    step,
    registerData,
    nextStep,
    prevStep,
    createRegisterDataHandler,
    addTechStack,
    removeTechStack,
    controlDisabled,
  } = useRegister();

  return (
    <main className="grid h-full w-full grid-rows-[90px_20px_auto_50px] pb-32 sm:max-h-[900px]">
      <Header backButtonEvent={prevStep} />

      <StepLabel step={step} />

      {step === 1 ? (
        <PositionStep
          position={registerData.position}
          setPosition={createRegisterDataHandler("position")}
        />
      ) : step === 2 ? (
        <TechStackStep
          allTechStacks={allTechStacks}
          selectedStacks={registerData.techStacks}
          addTechStack={addTechStack}
          removeTechStack={removeTechStack}
        />
      ) : (
        <NicknameStep
          nickname={registerData.nickname}
          setNickname={createRegisterDataHandler("nickname")}
        />
      )}

      <Botton
        size="large"
        onClick={nextStep}
        type="button"
        disabled={controlDisabled()}
      >
        {step === 2 ? "시작하기" : "계속"}
      </Botton>
    </main>
  );
};

export default RegisterForm;
