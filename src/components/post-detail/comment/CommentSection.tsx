"use client";

import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import type { PostType } from "@/types/postTypes";

interface CommentSectionProps {
  postType: PostType;
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
