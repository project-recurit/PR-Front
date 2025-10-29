"use client";

import NicknameStep from "@/components/auth/register/NicknameStep";
import PositionStep from "@/components/auth/register/PositionStep";
import StepLabel from "@/components/auth/register/StepLabel";
import TechStackStep from "@/components/auth/register/TechStackStep";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import { useRegister } from "@/hooks/register/useRegister";

const RegisterPage = () => {
  const {
    step,
    registerData,
    setPosition,
    setNickname,
    nextStep,
    prevStep,
    addTechStack,
    removeTechStack,
    validateErrorMessage,
  } = useRegister();

  return (
    <div className="flex h-screen flex-col">
      <Header backButtonEvent={prevStep} />
      <main className="mt-42 flex flex-1 flex-col px-16">
        <StepLabel step={step} />

        {step === 1 ? (
          <PositionStep
            position={registerData.position}
            setPosition={setPosition}
            validateErrorMessage={validateErrorMessage[1]}
          />
        ) : step === 2 ? (
          <TechStackStep
            selectedStacks={registerData.techStacks}
            addTechStack={addTechStack}
            removeTechStack={removeTechStack}
            validateErrorMessage={validateErrorMessage[2]}
          />
        ) : (
          <NicknameStep
            nickname={registerData.nickname}
            setNickname={setNickname}
            nextStep={nextStep}
            validateErrorMessage={validateErrorMessage[3]}
          />
        )}
      </main>
      <div className="fixed bottom-0 w-full px-16">
        <Button
          size="large"
          onClick={nextStep}
          type="button"
        >
          {step === 3 ? "시작하기" : "계속"}
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
