import { userSignUp } from "@/services/userServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// 스텝 컨트롤 및 폼 관련 로직 훅 분리
export const useSignUp = () => {
  const session = useSession().data as Session & { socialId: number };
  const router = useRouter();
  const [step, setStep] = useState(0);

  type SignupForm = z.infer<typeof signupSchema>;

  const signupSchema = z.object({
    socialId: z.number(),
    position: z.string().nonempty({ message: "포지션을 선택해주세요." }),
    techStackIds: z.array(z.number()).min(1, { message: "기술 스택을 최소 한가지 이상 선택해주세요." }),
    nickname: z
      .string()
      .nonempty({ message: "닉네임을 입력해주세요." })
      .min(3, { message: "3글자 이상 입력해주세요." })
      .max(10, { message: "10글자 이하로 입력해주세요." })
      .regex(/^[a-zA-Z0-9가-힣]+$/, {
        message: "특수문자는 사용할 수 없습니다.",
      }),
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
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
      // router.push("/");
      return;
    }
  };

  const handelPrevStep = async () => {
    if (step > 0) {
      prevStep();
    } else if (step === 0) {
      await signOut({ redirect: false });
      router.replace("/login");
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
