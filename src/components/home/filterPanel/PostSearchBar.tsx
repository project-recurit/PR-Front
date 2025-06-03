"use client";

import { Search } from "@/assets/svgs/icons";
import {
  type FieldValues,
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormResetField,
  type UseFormSetFocus,
  type UseFormSetValue,
} from "react-hook-form";

interface PostSearchBarProps {
  inputName: string;
  searchEvent: (query: string) => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  resetField: UseFormResetField<FieldValues>;
  setFocus: UseFormSetFocus<FieldValues>;
}

const PostSearchBar = ({
  inputName,
  searchEvent,
  register,
  setValue,
  handleSubmit,
  resetField,
  setFocus,
}: PostSearchBarProps) => {
  const onSubmit = ({ searchTerm }: FieldValues) => {
    if (!searchTerm.trim()) {
      setValue(inputName, "");
      return;
    }
    searchEvent(searchTerm.trim());
    resetField(inputName);
  };

  return (
    <div className="w-full border-b border-black-200 px-16 py-12">
      <form
        className="group flex w-full flex-row items-center rounded-8 border-1 border-black-400 p-16 focus-within:border-black-1000"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="caption-14-r w-full placeholder:text-black-400 focus:outline-none"
          type="text"
          placeholder="제목, 글 내용을 검색해보세요."
          {...register(inputName, {
            required: true,
            minLength: 1,
            onBlur: (e) => setValue(inputName, e.target.value.trim()),
          })}
        />
        <Search
          className="min-w-fit text-black-400 group-focus-within:text-black-1000"
          onClick={() => setFocus(inputName)}
        />
      </form>
    </div>
  );
};

export default PostSearchBar;
