import { getRelativeTime } from "@/utils/timeCalculation";

interface PostProfileProps {
  userNickname: string;
  modifiedAt: string;
}

const PostProfile = ({ userNickname, modifiedAt }: PostProfileProps) => {
  const relativeTime = getRelativeTime(modifiedAt);
  return (
    <div className="flex items-center gap-x-12">
      <div className="w-40 h-40 bg-gray-300 rounded-full" />
      <div className="flex flex-col gap-y-2">
        <span className="body-14-m">{userNickname}</span>
        <span className="caption-r">{relativeTime}</span>
      </div>
    </div>
  );
};

export default PostProfile;
