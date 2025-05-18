"use client";

import { useCreateComment } from "@/hooks/mutations/useCreateComment";
import type { MainCategory } from "@/types/filterTypes";
import { useForm, type FieldValues } from "react-hook-form";

interface CommentInputProps {
  postType: MainCategory;
  postId: string;
}

const CommentInput = ({ postType, postId }: CommentInputProps) => {
  const { register, setValue, handleSubmit, resetField } = useForm();
  const { mutate: createCommentMutate } = useCreateComment({ postType, postId });

  const onSubmit = ({ comment }: FieldValues) => {
    if (comment.trim() === "") {
      setValue("comment", "");
      return;
    }
    createCommentMutate({ comment });
    resetField("comment");
  };

  return (
    <div className="px-16 pb-6">
      <form
        className="flex w-full h-52 border border-black-400 rounded-8 px-16 py-8 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="flex-1 placeholder:text-black-400 outline-none"
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
