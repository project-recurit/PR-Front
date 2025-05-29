import ROUTES from "@/constants/routes";
import type { RegisterData } from "@/types/authTypes";
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
    techStackIds: new Set<number>(),
    nickname: "",
  });
  console.log("[㏒] registerData =>", registerData.techStackIds);

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
    if (step === 2 && registerData.techStackIds.size === 0) {
      return false;
    }
    if (step === 3 && !!registerData.nickname) {
      return false;
    }
    return true;
  };

  const setTechStackId = (stackId: number) => {
    if (registerData.techStackIds.has(stackId)) {
      registerData.techStackIds.delete(stackId);
      setRegisterData({ ...registerData, techStackIds: registerData.techStackIds });
      return;
    }
    registerData.techStackIds.add(stackId);
    setRegisterData({ ...registerData, techStackIds: registerData.techStackIds });
  };

  return {
    step,
    registerData,
    createRegisterDataHandler,
    nextStep,
    prevStep,
    controlDisabled,
    setTechStackId,
  };
};
