import { registerAction } from "@/app/actions/authActions";
import ROUTES from "@/constants/routes";
import { registerSchema } from "@/schemas/authSchemas";
import type { RegisterFormData } from "@/types/authTypes";
import type { TechStack } from "@/types/techStackTypes";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

/** 회원가입 훅 */
export const useRegister = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const registerData = useRef<RegisterFormData>({
    position: "",
    techStacks: [],
    nickname: "",
  });
  const [validateStepError, setValidateStepError] = useState<{ 1: string; 2: string; 3: string }>({
    1: "",
    2: "",
    3: "",
  });

  /** 유효성 검사 */
  const validateStep = () => {
    switch (step) {
      case 1:
        return registerSchema.position.safeParse(registerData.current.position);
      case 2:
        return registerSchema.techStack.safeParse(registerData.current.techStacks);
      case 3:
        return registerSchema.nickname.safeParse(registerData.current.nickname);
      default:
        throw new Error("유효하지 않은 단계입니다.");
    }
  };

  /** 다음 단계로 이동 및 최종 등록 처리 */
  const nextStep = async () => {
    const { success: validateSuccess, error: validateError } = validateStep();
    if (!validateSuccess) {
      setValidateStepError((prev) => ({ ...prev, [step]: validateError?.issues[0].message || "" }));
      return;
    }

    if (step < 3) {
      setStep((prev) => prev + 1);
      return;
    }
    const res = await registerAction(registerData.current);
    if (res?.status === "USER_INFO_UPDATE") {
      router.push(ROUTES.home);
    }
  };

  /** 이전 단계로 이동 */
  const prevStep = () => {
    if (step !== 1) {
      setStep((prev) => prev - 1);
    }
  };

  /** 기술스택 추가 */
  const addTechStack = (newTechStack: TechStack) => {
    if (registerData.current.techStacks.some((stack) => stack.id === newTechStack.id)) {
      return;
    }

    registerData.current.techStacks.push(newTechStack);
  };

  /** 기술스택 삭제 */
  const removeTechStack = (targetTechStack: TechStack) => {
    if (!registerData.current.techStacks.some((stack) => stack.id === targetTechStack.id)) {
      return;
    }

    registerData.current.techStacks = registerData.current.techStacks.filter(
      (stack) => stack.id !== targetTechStack.id,
    );
  };

  return {
    step,
    registerData,
    nextStep,
    prevStep,
    addTechStack,
    removeTechStack,
    validateStepError,
  };
};
