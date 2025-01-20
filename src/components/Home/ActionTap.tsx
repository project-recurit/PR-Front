"use client";

import { mainCategory } from "@/category";
import React, { useState } from "react";

const ActionTap = () => {
  const [selectedTap, setSelectedTap] = useState("전체");
  return (
    <div className="flex gap-x-[20px] border-b">
      {mainCategory.map((c) => (
        <button
          onClick={() => setSelectedTap(c)}
          key={c}
          className={`pb-[10px] border-b-[3px] min-w-fit ${
            selectedTap === c
              ? " border-green-700 text-green-700"
              : "border-transparent"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default ActionTap;
