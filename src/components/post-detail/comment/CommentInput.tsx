"use client";

import { useCreateComment } from "@/hooks/mutations/useCreateComment";
import { useForm, type FieldValues } from "react-hook-form";

interface CommentInputProps {
  postId: string;
}

const CommentInput = ({ postId }: CommentInputProps) => {
  const { register, setValue, handleSubmit } = useForm();
  const { mutate: createCommentMutate } = useCreateComment({ postId });

  const onSubmit = ({ comment }: FieldValues) => {
    if (comment.trim() === "") {
      setValue("comment", "");
      return;
    }
    createCommentMutate(comment);
  };

  return (
    <form
      className="flex w-full h-52 border border-black-400 rounded-8 px-16 py-8 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="flex-1 placeholder:text-black-400"
        type="text"
        placeholder="댓글을 입력하세요"
        {...register("comment", {
          required: true,
          minLength: 1,
          onBlur: (e) => setValue("comment", e.target.value.trim()),
        })}
      />
      <button
        className="text-[#F6C789]"
        type="submit"
      >
        등록
      </button>
    </form>
  );
};

export default CommentInput;
