import { signUpAction } from "@/actions/authActions";
import { signUpSchema } from "@/schema/authSchema";
import type { SignupForm } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// 스텝 컨트롤 및 폼 관련 로직 훅 분리
export const useSignUp = () => {
  const session = useSession().data as Session & { socialId: number };
  const router = useRouter();
  const [step, setStep] = useState(0);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "all",
    defaultValues: {
      socialId: session?.socialId || 0,
      position: "",
      techStackIds: [] as number[],
      nickname: "",
    },
  });

  if (session && session.socialId) {
    setValue("socialId", session.socialId);
  }

  const positionValue = watch("position");
  const techStackIds = watch("techStackIds");
  const nicknameValue = watch("nickname");

  const onSubmit = async (data: SignupForm) => {
    console.log(data);
    // await userSignUp(data);
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const handleNextStep = () => {
    if (step < 2) {
      nextStep();
      return;
    } else {
      handleSubmit(onSubmit)();
      router.push("/");
      return;
    }
  };

  const handelPrevStep = async () => {
    if (step > 0) {
      prevStep();
    } else if (step === 0) {
      await signOut({ redirect: false });
      router.replace("/sign-in");
    }
  };

  const controlDisabled = () => {
    if (step === 0 && positionValue) {
      return false;
    } else if (step === 1 && techStackIds.length > 0) {
      return false;
    } else if (step === 2 && !errors.nickname) {
      return false;
    }
    return true;
  };

  const setTechStackIds = (stackId: number) => {
    if (techStackIds.includes(stackId)) {
      setValue(
        "techStackIds",
        techStackIds.filter((id) => id !== stackId),
      );
      return;
    } else {
      setValue("techStackIds", [...techStackIds, stackId]);
    }
  };

  return {
    step,
    handleNextStep,
    handelPrevStep,
    setValue,
    positionValue,
    handleSubmit,
    onSubmit,
    errors,
    controlDisabled,
    techStackIds,
    setTechStackIds,
    nicknameValue,
  };
};
