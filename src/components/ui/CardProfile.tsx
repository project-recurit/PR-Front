const CardProfile = () => {
  return (
    <div className="flex items-center gap-x-[12px]">
      <div className="bg-gray-300 rounded-full w-[40px] h-[40px]" />
      <div className="flex flex-col gap-y-[2px]">
        <p className="body-14-m">닉네임</p>
        <p className="caption-r">1시간 전</p>
      </div>
    </div>
  );
};

export default CardProfile;
