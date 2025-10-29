"use client";

import { Plus } from "@/assets/svgs/icons";

const FloatingButton = () => {
  return (
    <div className={"fixed bottom-0 w-full"}>
      {/* TODO - 모집글로 이동 Link */}
      <div className="absolute bottom-75 right-10 flex h-50 w-50 items-center justify-center rounded-full bg-black">
        <Plus className={"h-20 w-20 stroke-white"} />
      </div>
    </div>
  );
};

export default FloatingButton;
