"use client";

import { REGISTER_ERROR_MESSAGE_STYLE } from "@/styles/tailwindStyles/registerStyles";
import { useState } from "react";

interface NicknameStepProps {
  nickname: string;
  nextStep: () => void;
  setNickname: (value: string) => void;
  validateErrorMessage: string;
}

const NicknameStep = ({ nickname, nextStep, setNickname, validateErrorMessage }: NicknameStepProps) => {
  const [nicknameInput, setNicknameInput] = useState<string>(nickname);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNickname(nicknameInput);
    nextStep();
  };
  return (
    <>
      <span className="title-24-b mb-142">닉네임을 입력해주세요.</span>
      <form onSubmit={onSubmit}>
        <input
          value={nicknameInput}
          onChange={(e) => setNicknameInput(e.target.value)}
          placeholder="닉네임 입력"
          className="body-16-r placeholder:body-16-b h-52 w-full rounded-8 border-1 border-black-400 px-16 text-black-1000 placeholder:text-black-400 focus:outline-none"
        />
      </form>
      {/* TODO - 에러 메시지 타이밍 조정 */}
      {validateErrorMessage && <span className={REGISTER_ERROR_MESSAGE_STYLE}>{validateErrorMessage}</span>}
    </>
  );
};

export default NicknameStep;
