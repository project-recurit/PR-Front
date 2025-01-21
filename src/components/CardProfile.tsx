const CardProfile = () => {
  return (
    <div className="flex items-center gap-x-[12px]">
      <div className="bg-gray-300 rounded-full w-[40px] h-[40px]" />
      <div className="flex flex-col gap-y-[2px]">
        <p className="text-sm">닉네임</p>
        <p className="text-xs">시간</p>
      </div>
    </div>
  );
};

export default CardProfile;
