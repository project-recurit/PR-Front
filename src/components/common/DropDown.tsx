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
      {label && <p className="body-16-b mb-12">{label}</p>}
      <div
        className={`px-16 w-full h-fit relative body-16-r border-1 border-black-400 rounded-8 ${
          isDropDownOpen ? "text-black-1000" : "text-black-400"
        }`}
      >
        <div
          onClick={toggleDropDown}
          className="w-full  py-14 flex justify-between"
        >
          {children}
          {isDropDownOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className="max-h-[357px] overflow-y-scroll -mt-7">
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
