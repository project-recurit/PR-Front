"use client";

import NicknameStep from "@/components-temp/auth/register/NicknameStep";
import PositionStep from "@/components-temp/auth/register/PositionStep";
import StepLabel from "@/components-temp/auth/register/StepLabel";
import TechStackStep from "@/components-temp/auth/register/TechStackStep";
import Header from "@/components-temp/layout/Header";
import Botton from "@/components-temp/ui/Botton";
import { useRegister } from "@/hooks/register/useRegister";

const RegisterPage = () => {
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
    <div className="flex h-screen flex-col">
      <Header backButtonEvent={prevStep} />
      <main className="mt-42 flex flex-1 flex-col px-16">
        <StepLabel step={step} />

        {step === 1 ? (
          <PositionStep
            position={registerData.position}
            setPosition={createRegisterDataHandler("position")}
          />
        ) : step === 2 ? (
          <TechStackStep
            selectedStacks={registerData.techStacks}
            addTechStack={addTechStack}
            removeTechStack={removeTechStack}
          />
        ) : (
          <NicknameStep
            nickname={registerData.nickname}
            setNickname={createRegisterDataHandler("nickname")}
            nextStep={nextStep}
          />
        )}
      </main>
      <div className="fixed bottom-0 w-full px-16">
        <Botton
          size="large"
          onClick={nextStep}
          type="button"
          disabled={controlDisabled()}
        >
          {step === 3 ? "시작하기" : "계속"}
        </Botton>
      </div>
    </div>
  );
};

export default RegisterPage;
