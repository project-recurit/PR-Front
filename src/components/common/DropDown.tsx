"use client";

import { ChevronDown, ChevronUp } from "@/assets/icons";
import { useDropDownControl } from "@/hooks/DropDownControl";

const DropDown = ({
  children,
  label,
  menu,
}: {
  children: string;
  label?: string;
  menu: string[];
}) => {
  const { isDropDownOpen, closeDropDown, toggleDropDown } =
    useDropDownControl();

  return (
    <>
      {label && <p className="mb-12 body-16-b">{label}</p>}
      <div
        className={`px-16 w-full relative body-16-r  border-1 border-black-400 rounded-8 ${
          isDropDownOpen ? "text-black-1000" : "text-black-400"
        }`}
      >
        <div
          onClick={toggleDropDown}
          className="flex items-center justify-between w-full h-52"
        >
          {children}
          {isDropDownOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className="max-h-[357px] overflow-y-scroll ">
          {isDropDownOpen &&
            menu.map((c) => (
              <div className="py-14" key={c}>
                {c}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
