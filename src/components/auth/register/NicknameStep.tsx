"use client";

interface NicknameStepProps {
  nickname: string;
  nextStep: () => void;
  setNickname: (value: string) => void;
}

const NicknameStep = ({ nickname, nextStep, setNickname }: NicknameStepProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <span className="title-24-b mb-142">닉네임을 입력해주세요.</span>
      <form onSubmit={onSubmit}>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임 입력"
          className="body-16-r placeholder:body-16-b h-52 w-full rounded-8 border-1 border-black-400 px-16 text-black-1000 placeholder:text-black-400 focus:outline-none"
        />
      </form>
    </>
  );
};

export default NicknameStep;
