"use client";

import { POST_TYPES } from "@/constants/filterOptions";
import type { PostType } from "@/types/postTypes";
import { Dispatch, SetStateAction } from "react";

interface CategoryTabProps {
  selectedMenu: PostType;
  setSelectedMenu: Dispatch<SetStateAction<PostType>>;
}

const CategoryTab = ({ selectedMenu, setSelectedMenu }: CategoryTabProps) => {
  return (
    <div className="sticky flex gap-x-20 border-b-1 border-black-300 px-20 pt-13">
      {POST_TYPES.map((category) => (
        <button
          onClick={() => setSelectedMenu(category)}
          key={category}
          className="body-14-s mb-4 flex min-w-fit flex-col items-center"
        >
          {category}
          <div
            className={`absolute -bottom-2 h-3 w-39 rounded-full ${
              selectedMenu === category ? "bg-green-600" : "bg-transparent"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
