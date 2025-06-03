import { formatTimeAgo } from "@/utils/timeCalculation";

interface PostProfileProps {
  nickname: string;
  modifiedAt: string;
}

const PostProfile = ({ nickname, modifiedAt }: PostProfileProps) => {
  const relativeTime = formatTimeAgo(modifiedAt);
  return (
    <div className="flex items-center gap-x-12">
      <div className="h-40 w-40 rounded-full bg-gray-300" />
      <div className="flex flex-col gap-y-2">
        <span className="body-14-m">{nickname}</span>
        <span className="caption-12-r">{relativeTime}</span>
      </div>
    </div>
  );
};

export default PostProfile;
