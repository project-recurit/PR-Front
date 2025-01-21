import { PJpost } from "@/type/type";
import CardProfile from "./CardProfile";

const PJCard = ({ post }: { post: PJpost }) => {
  return (
    <section className="w-full bg-white rounded-md border shadow-sm flex flex-col gap-y-[8px] p-[12px]">
      <CardProfile />
      <p className="text-lg font-bold">{post.title}</p>
      <p className="text-sm overflow-line2">{post.content}</p>
      <div className="flex gap-x-[8px] text-sm">
        {post.techStacks.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </section>
  );
};

export default PJCard;
