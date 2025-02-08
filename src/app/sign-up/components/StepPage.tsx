"use client";

import { STEP_COMPONENTS } from "@/assets/constantData";
import { useStep } from "@/hooks/signupStep";
import StepLabel from "./StepLabel";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import DropDown from "@/components/common/DropDown";

const StepPage = () => {
  const router = useRouter();
  const { step, nextStep, prevStep } = useStep();
  const Component = STEP_COMPONENTS[step];

  const handleStep = () => {
    if (step < 2) {
      nextStep();
      return;
    } else {
      router.push("/");
      return;
    }
  };

  return (
    <div>
      <StepLabel step={step} />
      <Component />
      <DropDown> 직무 선택</DropDown>
      <Button size="m" onClick={handleStep}>
        {step === 2 ? "시작하기" : "계속"}
      </Button>
    </div>
  );
};

export default StepPage;
