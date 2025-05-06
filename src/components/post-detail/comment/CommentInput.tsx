"use client";

import { useCreateComment } from "@/hooks/mutations/useCreateComment";
import { useForm, type FieldValues } from "react-hook-form";

interface CommentInputProps {
  postId: string;
}

const CommentInput = ({ postId }: CommentInputProps) => {
  const { register, setValue, handleSubmit, formState } = useForm();
  const { mutate: createCommentMutate } = useCreateComment({ postId });

  const onSubmit = ({ comment }: FieldValues) => {
    if (comment.trim() === "") {
      setValue("comment", "");
      return;
    }
    createCommentMutate(comment);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        {...register("comment", {
          required: true,
          minLength: 1,
          onBlur: (e) => setValue("comment", e.target.value.trim()),
        })}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default CommentInput;
