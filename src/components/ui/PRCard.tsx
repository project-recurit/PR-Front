import { PRpost } from "@/type/type";
import Card from "./Card";

const PRCard = ({ post }: { post: PRpost }) => {
  return (
    <Card>
      <p className="body-16-s overflow-line2">{post.title}</p>
      <p className="text-sm overflow-line2overflow-line2">{post.username}</p>
      <div className="flex gap-x-[8px] text-sm">
        {post.techStacks.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </Card>
  );
};

export default PRCard;
