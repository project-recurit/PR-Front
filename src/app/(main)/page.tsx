"use client";

import PostList from "@/components/home/body/PostList";
import Filter from "@/components/home/filterPanel/Filter";
import FloatingButton from "@/components/ui/FloatingButton";
import ReactHookFormSearchBar from "@/components/ui/ReactHookFormSearchBar";
import { useForm } from "react-hook-form";

const HomePage = () => {
  const { register, setValue, handleSubmit, resetField, setFocus } = useForm();

  return (
    <main className="flex flex-col mb-56">
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
      <FloatingButton />
    </main>
  );
};

export default HomePage;
