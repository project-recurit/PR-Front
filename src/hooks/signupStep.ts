import { useState } from "react";

export const useStep = () => {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return { step, nextStep, prevStep };
};
