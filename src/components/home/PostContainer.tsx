"use client";

import ReactHookFormSearchBar from "../ui/ReactHookFormSearchBar";
import PostList from "./body/PostList";
import Filter from "./filterPanel/Filter";
import type { TechStack } from "@/types/commonTypes";
import { useForm } from "react-hook-form";

interface PostContainerProps {
  allTechStacks: TechStack[];
}

const PostContainer = ({ allTechStacks }: PostContainerProps) => {
  const { register, setValue, handleSubmit, resetField, setFocus, getValues } = useForm();
  const searchQuery = getValues("homeSearch");
  console.log("searchQuery =", searchQuery);
  return (
    <div>
      <div className="h-72 w-full border-b border-black-200 px-16 py-12">
        <ReactHookFormSearchBar
          inputName="homeSearch"
          placeholder="제목, 글 내용을 검색해보세요."
          register={register}
          setValue={setValue}
          handleSubmit={handleSubmit}
          resetField={resetField}
          setFocus={setFocus}
          searchEvent={(query) => console.log(query)}
        />
      </div>
      <Filter />
      <PostList />
    </div>
  );
};

export default PostContainer;
