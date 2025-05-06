import { Heart, Comment, Eye } from "@/assets/icons";

interface EngagementProps {
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
}

const Engagement = ({ viewCount, commentCount, favoriteCount }: EngagementProps) => {
  const engagementData = [
    { icon: <Eye />, count: viewCount },
    { icon: <Comment />, count: commentCount },
    { icon: <Heart />, count: "데이터 안 넘어옴" },
  ];

  return (
    <>
      <hr className="bg-black-200" />
      <div className="flex gap-x-20 text-black-500">
        {engagementData.map((stat, index) => (
          <span
            key={index}
            className="flex items-center gap-x-2"
          >
            {stat.icon}
            {stat.count}
          </span>
        ))}
      </div>
    </>
  );
};

export default Engagement;
