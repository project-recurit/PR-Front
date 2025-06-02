import ROUTES from "@/constants/routes";
import type { RegisterData } from "@/types/authTypes";
import type { TechStack } from "@/types/commonTypes";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/** 회원가입 훅 */
export const useRegister = () => {
  const session = useSession().data as Session & { socialId: number };
  const router = useRouter();
  const [step, setStep] = useState<number>(2);
  const [registerData, setRegisterData] = useState<RegisterData>({
    socialId: 0,
    position: "",
    techStacks: [],
    nickname: "",
  });
  console.log("[㏒] registerData =>", registerData.techStacks);

  const createRegisterDataHandler = <K extends keyof RegisterData>(key: K) => {
    return (value: RegisterData[K]) => {
      setRegisterData({ ...registerData, [key]: value });
    };
  };

  if (session && session.socialId) {
    setRegisterData({ ...registerData, socialId: session.socialId });
  }

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    router.push(ROUTES.home);
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
