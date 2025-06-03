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

interface ReactHookFormSearchBarProps {
  inputName: string;
  placeholder?: string;
  searchEvent: (query: string) => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  resetField: UseFormResetField<FieldValues>;
  setFocus: UseFormSetFocus<FieldValues>;
}

const ReactHookFormSearchBar = ({
  inputName,
  placeholder,
  searchEvent,
  register,
  setValue,
  handleSubmit,
  resetField,
  setFocus,
}: ReactHookFormSearchBarProps) => {
  const onSubmit = ({ searchTerm }: FieldValues) => {
    if (!searchTerm.trim()) {
      setValue(inputName, "");
      return;
    }
    searchEvent(searchTerm.trim());
    resetField(inputName);
  };

  return (
    <form
      className="group flex h-fit w-full flex-row items-center rounded-8 border-1 border-black-400 p-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="caption-16-r h-full w-full focus:outline-none"
        type="text"
        placeholder={placeholder}
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
  );
};

export default ReactHookFormSearchBar;
