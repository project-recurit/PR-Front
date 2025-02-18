"use client";

import { STEP_COMPONENTS } from "@/assets/constantData";
import { useStep } from "@/hooks/signupStep";
import StepLabel from "./StepLabel";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { ChevronLeft, XClose } from "@/assets/icons";

const StepPage = () => {
  const router = useRouter();
  const { step, nextStep, prevStep } = useStep();
  const Component = STEP_COMPONENTS[step];

  const handleNextStep = () => {
    if (step < 2) {
      nextStep();
      return;
    } else {
      router.push("/");
      return;
    }
  };

  const handelPrevStep = () => {
    if (step > 0) {
      prevStep();
    } else if (step === 0) {
      router.push("/login");
    }
  };

  return (
    <div className="w-full h-full pb-32 grid grid-rows-[90px_20px_auto_50px] sm:max-h-[900px]">
      <div className="flex justify-between h-48 items-center">
        <ChevronLeft onClick={handelPrevStep} className=" cursor-pointer" />
        <XClose className="w-32" />
      </div>
      <StepLabel step={step} />
      <Component />
      <Button size="m" onClick={handleNextStep}>
        {step === 2 ? "시작하기" : "계속"}
      </Button>
    </div>
  );
};

export default StepPage;
