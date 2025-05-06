interface CardProfileProps {
  userNickname?: string;
  modifiedAt?: string;
}

const CardProfile = ({ userNickname, modifiedAt }: CardProfileProps) => {
  return (
    <div className="flex items-center gap-x-12">
      <div className="h-40 w-40 rounded-full bg-gray-300" />
      <div className="flex flex-col gap-y-2">
        <p className="body-14-m">{userNickname}</p>
        <p className="caption-r">1시간 전</p>
      </div>
    </div>
  );
};

export default CardProfile;
