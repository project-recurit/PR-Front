import Input from "@/components/ui/Input";

const ThirdStep = ({
  nickname,
  setNickname,
}: {
  nickname: string;
  setNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mt-18">
      <p className="title-24-b mb-142">닉네임을 입력해주세요.</p>
      <Input
        placeholder="닉네임 입력"
        value={nickname}
        onChange={setNickname}
      />
    </div>
  );
};

export default ThirdStep;
