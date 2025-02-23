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
  const { isDropDownOpen, closeDropDown, openDropDown } = useDropDownControl();

  return (
    <>
      {label && <p className="mb-12 body-16-b">{label}</p>}
      <div className="relative w-full body-16-r">
        <div
          onClick={openDropDown}
          className={`px-16 w-full h-52 flex justify-between items-center body-16-r  border-1 border-black-400 rounded-8 ${
            isDropDownOpen ? "text-black-1000" : "text-black-400"
          }`}
        >
          {children}
          <ChevronDown />
        </div>
        {isDropDownOpen && (
          <div
            className={`h-[357px] py-14 absolute top-0 bg-white w-full flex flex-col justify-between left-0 rounded-8 px-16 border-1 border-black-400`}
          >
            <div onClick={closeDropDown} className="flex justify-between">
              {children}
              <ChevronUp />
            </div>
            {menu.map((c) => (
              <div className="" key={c}>
                {c}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <div
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
      </div> */}
    </>
  );
};

export default DropDown;
