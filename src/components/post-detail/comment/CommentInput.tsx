"use client";

import { useCreateCommentMutation } from "@/hooks/tanstack/mutations/useCreateComment";
import type { PostType } from "@/types/postTypes";
import { useForm, type FieldValues } from "react-hook-form";

interface CommentInputProps {
  postType: PostType;
  postId: string;
}

const CommentInput = ({ postType, postId }: CommentInputProps) => {
  const { register, setValue, handleSubmit, resetField } = useForm();
  const { mutate: createCommentMutate } = useCreateCommentMutation({ postType, postId });

  const onSubmit = ({ comment }: FieldValues) => {
    if (!comment.trim()) {
      setValue("comment", "");
      return;
    }
    createCommentMutate({ comment });
    resetField("comment");
  };

  return (
    <div className="px-16 pb-6">
      <form
        className="flex h-52 w-full items-center rounded-8 border border-black-400 px-16 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="flex-1 outline-none placeholder:text-black-400"
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
    </div>
  );
};

export default CommentInput;
