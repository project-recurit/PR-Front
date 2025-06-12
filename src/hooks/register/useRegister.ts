import { registerAction } from "@/app/actions/authActions";
import { REGISTER_STEP_FIELD_MAP } from "@/constants/registerConstants";
import { REGISTER_FIELDS } from "@/constants/registerConstants";
import ROUTES from "@/constants/routes";
import { registerSchema } from "@/schemas/authSchemas";
import type { RegisterFormData } from "@/types/authTypes";
import type { TechStack } from "@/types/techStackTypes";
import { ValueOf } from "@/types/utils";
import { createStateKeySetter } from "@/utils/stateUtills";
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
  const [validateErrorMessage, setValidateErrorMessage] = useState<Record<number, string>>({
    1: "",
    2: "",
    3: "",
  });

  /** 유효성 검사 */
  const validateStep = (value: ValueOf<RegisterFormData>) => {
    const fieldKey = REGISTER_STEP_FIELD_MAP[step];
    const schema = registerSchema[fieldKey];
    const { success, error } = schema.safeParse(value);
    setValidateErrorMessage((prev) =>
      success ? { ...prev, [step]: "" } : { ...prev, [step]: error?.issues[0].message || "유효성 오류" },
    );
    return success;
  };

  const createFieldSetter = (fieldKey: keyof RegisterFormData) => {
    return (value: ValueOf<RegisterFormData>) => {
      createStateKeySetter(setRegisterData)(fieldKey)(value);
      validateStep(value);
    };
  };

  /** 다음 단계로 이동 및 최종 등록 처리 */
  const nextStep = async () => {
    if (!validateStep(registerData[REGISTER_STEP_FIELD_MAP[step]])) {
      return;
    }

    if (step < 3) {
      setStep((prev) => prev + 1);
      return;
    }

    const res = await registerAction(registerData);
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
    if (registerData.techStacks.some((stack) => stack.id === newTechStack.id)) {
      return;
    }

    setRegisterData((prev) => ({ ...prev, techStacks: [...prev.techStacks, newTechStack] }));
  };

  /** 기술스택 삭제 */
  const removeTechStack = (targetTechStack: TechStack) => {
    if (!registerData.techStacks.some((stack) => stack.id === targetTechStack.id)) {
      return;
    }

    setRegisterData((prev) => ({
      ...prev,
      techStacks: prev.techStacks.filter((stack) => stack.id !== targetTechStack.id),
    }));
  };

  return {
    step,
    registerData,
    setPosition: createFieldSetter(REGISTER_FIELDS.position),
    setNickname: createFieldSetter(REGISTER_FIELDS.nickname),
    nextStep,
    prevStep,
    addTechStack,
    removeTechStack,
    validateErrorMessage,
  };
};
