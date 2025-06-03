import { registerAction } from "@/app/actions/authActions";
import ROUTES from "@/constants/routes";
import type { RegisterFormData } from "@/types/authTypes";
import type { TechStack } from "@/types/commonTypes";
import { createObjectKeySetter } from "@/utils/objectUtills";
import { useRouter } from "next/navigation";
import { useState } from "react";

/** 회원가입 훅 */
export const useRegister = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [registerData, setRegisterData] = useState<RegisterFormData>({
    position: "",
    techStacks: [],
    nickname: "",
  });
  console.log("[㏒] registerData =>", registerData);

  const createRegisterDataHandler = createObjectKeySetter(setRegisterData);

  const nextStep = async () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    const res = await registerAction(registerData);

    if (res?.status === "USER_INFO_UPDATE") {
      router.push(ROUTES.home);
    }
  };

  const prevStep = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  };

  const controlDisabled = () => {
    if (step === 1 && !!registerData.position) {
      return false;
    }
    if (step === 2 && registerData.techStacks.length === 0) {
      return false;
    }
    if (step === 3 && !!registerData.nickname) {
      return false;
    }
    return true;
  };

  const addTechStack = (newTechStack: TechStack) => {
    if (registerData.techStacks.some((selectedTechStack) => selectedTechStack.id === newTechStack.id)) {
      return;
    }

    setRegisterData({ ...registerData, techStacks: [...registerData.techStacks, newTechStack] });
  };

  const removeTechStack = (newTechStack: TechStack) => {
    if (!registerData.techStacks.some((selectedTechStack) => selectedTechStack.id === newTechStack.id)) {
      return;
    }

    const updatedTechStackIds = registerData.techStacks.filter(
      (selectedTechStack) => selectedTechStack.id !== newTechStack.id,
    );
    setRegisterData({ ...registerData, techStacks: updatedTechStackIds });
  };

  return {
    step,
    registerData,
    createRegisterDataHandler,
    nextStep,
    prevStep,
    controlDisabled,
    addTechStack,
    removeTechStack,
  };
};
