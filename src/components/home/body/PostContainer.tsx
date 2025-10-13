"use client";

import CategoryTab from "../filterPanel/CategoryTab";
import FilterSection from "../filterPanel/FilterSection";
import PostSearchBar from "../filterPanel/PostSearchBar";
import PostList from "./PostList";
// import type { PostFilter } from "@/types/filterTypes";
import type { PostType } from "@/types/postTypes";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export const POST_SEARCH = "postSearch";

const PostContainer = () => {
  const [selectedMenu, setSelectedMenu] = useState<PostType>("PJ");
  const appliedFilters = useRef(new Set<string>());
  const { register, setValue, handleSubmit, resetField, setFocus } = useForm();
  return (
    <>
      <CategoryTab
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <PostSearchBar
        inputName={POST_SEARCH}
        register={register}
        setValue={setValue}
        handleSubmit={handleSubmit}
        resetField={resetField}
        setFocus={setFocus}
      />
      <FilterSection appliedFilters={appliedFilters.current} />
      <PostList selectedMenu={selectedMenu} />
    </>
  );
};

export default PostContainer;
