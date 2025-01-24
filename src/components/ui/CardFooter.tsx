import { BookMark, Comment, Eye } from "@/assets/icons";

const CardFooter = () => {
  return (
    <div className="flex gap-x-20 ">
      <Eye stroke="gray" />
      <Comment stroke="gray" />
      <BookMark stroke="gray" />
    </div>
  );
};

export default CardFooter;
