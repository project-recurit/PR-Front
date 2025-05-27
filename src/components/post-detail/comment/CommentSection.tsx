"use client";

import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import type { MainCategory } from "@/types/filterTypes";

interface CommentSectionProps {
  postType: MainCategory;
  postId: string;
}

const CommentSection = ({ postType, postId }: CommentSectionProps) => {
  return (
    <section className="flex flex-col">
      <CommentInput
        postType={postType}
        postId={postId}
      />
      <CommentList
        postType={postType}
        postId={postId}
      />
    </section>
  );
};

export default CommentSection;
