const ProfileContentItem = () => {
  return (
    <li className="flex items-center justify-between gap-10 border-b-1 border-black-200 bg-white px-16 py-12">
      <img
        className="h-50 w-50 border-0 bg-[#D9D9D9]"
        alt="post thumnail"
      />
      <div className="min-w-0 flex-1">
        <h3 className="caption-12-s line-clamp-1 text-black-1000">
          라이프스타일 디자이너 구합니다라이프스타일 디자이너 구합니다
        </h3>
        <p className="caption-10-r mt-4 text-black-600">작성자 닉네임 • 2025.01.01 • PJ</p>
      </div>
      <div className="border-ack-200 ml-auto flex h-24 w-24 items-center justify-center rounded-full border-1">
        <p className="caption-10-r">222</p>
      </div>
    </li>
  );
};

export default ProfileContentItem;
