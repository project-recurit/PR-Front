import { registerAction } from "@/app/actions/authActions";
import ROUTES from "@/constants/routes";
import type { RegisterFormData } from "@/types/authTypes";
import type { TechStack } from "@/types/commonTypes";
import { createObjectKeySetter } from "@/utils/stateUtills";
import { useRouter } from "next/navigation";
import { useState, useCallback, useMemo } from "react";

/** 회원가입 훅 */
export const useRegister = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [registerData, setRegisterData] = useState<RegisterFormData>({
    position: "",
    techStacks: [],
    nickname: "",
  });

  /** 다음 단계로 이동 및 최종 등록 처리 */
  const nextStep = useCallback(async () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
      return;
    }
    const res = await registerAction(registerData);
    if (res?.status === "USER_INFO_UPDATE") {
      router.push(ROUTES.home);
    }
  }, [step, registerData, router]);

  /** 이전 단계로 이동 */
  const prevStep = useCallback(() => {
    if (step === 1) {
      return;
    }

    setStep((prev) => (prev > 0 ? prev - 1 : prev));
  }, [step]);

  /** 버튼 비활성화 조건 */
  const controlDisabled = useCallback(() => {
    switch (step) {
      case 1:
        return !registerData.position;
      case 2:
        return registerData.techStacks.length === 0;
      case 3:
        return !registerData.nickname;
      default:
        return true;
    }
  }, [step, registerData]);

  /** 기술스택 추가 */
  const addTechStack = useCallback(
    (newTechStack: TechStack) => {
      if (registerData.techStacks.some((stack) => stack.id === newTechStack.id)) {
        return;
      }

      setRegisterData((prev) => ({ ...prev, techStacks: [...prev.techStacks, newTechStack] }));
    },
    [registerData],
  );

  /** 기술스택 삭제 */
  const removeTechStack = useCallback(
    (targetTechStack: TechStack) => {
      if (!registerData.techStacks.some((stack) => stack.id === targetTechStack.id)) {
        return;
      }

      setRegisterData((prev) => ({
        ...prev,
        techStacks: prev.techStacks.filter((stack) => stack.id !== targetTechStack.id),
      }));
    },
    [registerData],
  );

  return {
    step,
    registerData,
    setPosition: useMemo(() => createObjectKeySetter(setRegisterData)("position"), []),
    setNickname: useMemo(() => createObjectKeySetter(setRegisterData)("nickname"), []),
    nextStep,
    prevStep,
    controlDisabled,
    addTechStack,
    removeTechStack,
  };
};
