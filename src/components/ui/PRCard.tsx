import { PRpost } from "@/type/type";
import CardProfile from "./CardProfile";

const PRCard = ({ post }: { post: PRpost }) => {
  return (
    <section className="w-full bg-white rounded-md border shadow-sm flex flex-col gap-y-[8px] p-[12px]">
      <CardProfile />
      <p className="text-lg font-bold">{post.title}</p>
      <p className="text-sm overflow-line2overflow-line2">{post.username}</p>
      <div className="flex gap-x-[8px] text-sm">
        {post.techStacks.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </section>
  );
};

export default PRCard;
