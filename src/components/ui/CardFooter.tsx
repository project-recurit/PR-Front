import { BookMark, Comment, Eye } from "@/assets/icons";

const CardFooter = () => {
  return (
    <div className="flex gap-x-20 text-black-500 ">
      <Eye />
      <Comment />
      <BookMark />
    </div>
  );
};

export default CardFooter;
