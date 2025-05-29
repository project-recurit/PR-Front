"use client";

const NicknameStep = ({
  nickname,
  setNickname,
}: {
  nickname: string;
  setNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mt-18">
      <p className="title-24-b mb-142">닉네임을 입력해주세요.</p>
      <input
        value={nickname}
        onChange={setNickname}
        placeholder="닉네임 입력"
        className="w-full px-16 h-52 body-16-r placeholder:body-16-b placeholder:text-black-400 text-black-1000 border-1 border-black-400 rounded-8 focus:outline-none "
      />
    </div>
  );
};

export default NicknameStep;
