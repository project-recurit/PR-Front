"use client";

import { ChevronDown, ChevronUp } from "@/assets/icons";
import { useDropDownControl } from "@/hooks/DropDownControl";

const DropDown = ({ children, label, menu }: { children: string; label?: string; menu: string[] }) => {
  const { isDropDownOpen, closeDropDown, toggleDropDown } = useDropDownControl();

  return (
    <>
      {label && <p className="body-16-b mb-12">{label}</p>}
      <div
        className={`body-16-r relative w-full rounded-8 border-1 border-black-400 px-16 ${
          isDropDownOpen ? "text-black-1000" : "text-black-400"
        }`}
      >
        <div
          onClick={toggleDropDown}
          className="flex h-52 w-full items-center justify-between"
        >
          {children}
          {isDropDownOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className="max-h-[357px] overflow-y-scroll">
          {isDropDownOpen &&
            menu.map((c) => (
              <div
                className="py-14"
                key={c}
              >
                {c}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
