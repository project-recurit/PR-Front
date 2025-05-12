import { getRelativeTime } from "@/utils/relativeTime";

interface PostProfileProps {
  userNickname: string;
  modifiedAt: string;
}

const PostProfile = ({ userNickname, modifiedAt }: PostProfileProps) => {
  const relativeTime = getRelativeTime(modifiedAt);
  return (
    <div className="flex items-center gap-x-12">
      <div className="h-40 w-40 rounded-full bg-gray-300" />
      <div className="flex flex-col gap-y-2">
        <span className="body-14-m">{userNickname}</span>
        <span className="caption-r">{relativeTime}</span>
      </div>
    </div>
  );
};

export default PostProfile;
