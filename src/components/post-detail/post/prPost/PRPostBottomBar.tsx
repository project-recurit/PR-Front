"use client";

import Botton from "@/components/ui/Botton";

const PRPostBottomBar = () => {
  return (
    <footer className="fixed bottom-0 w-full justify-center gap-16 border-t border-gray-200 bg-white px-16 py-8">
      <Botton
        size={"large"}
        color={"black"}
        onClick={() => {}}
      >
        채팅하기
      </Botton>
    </footer>
  );
};

export default PRPostBottomBar;
