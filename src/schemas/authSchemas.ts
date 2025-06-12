import { z } from "zod";

export const registerSchema = {
  position: z.string().min(1, { message: "포지션을 선택해주세요." }),
  techStacks: z.array(z.object({ id: z.number(), name: z.string() })).min(1, {
    message: "기술 스택을 최소 한가지 이상 선택해주세요.",
  }),
  nickname: z
    .string()
    .trim()
    .nonempty({ message: "닉네임을 입력해주세요." })
    .min(3, { message: "3글자 이상 입력해주세요." })
    .max(10, { message: "10글자 이하로 입력해주세요." })
    .regex(/^[a-zA-Z0-9가-힣]+$/, {
      message: "특수문자는 사용할 수 없습니다.",
    }),
};
