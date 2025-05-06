"use client";

import { ChevronDown, ChevronUp } from "@/assets/icons";
import { useDropDownControl } from "@/hooks/DropDownControl";

const DropDown = ({
  children,
  label,
  menu,
  value,
  setValue,
}: {
  children: string;
  label?: string;
  menu: string[];
  value?: string;
  setValue?: (v: string) => void;
}) => {
  const { isDropDownOpen, closeDropDown, openDropDown } = useDropDownControl();

  const handleDropdownValue = (v: string) => {
    if (setValue) {
      setValue(v);
    }
    closeDropDown();
  };

  const handleResetValue = () => {
    if (setValue) {
      setValue("");
    }
    closeDropDown();
  };
  return (
    <>
      {label && <p className="mb-12 body-16-b">{label}</p>}
      <div className="relative w-full body-16-r">
        <div
          onClick={openDropDown}
          className={`px-16 w-full h-52 flex justify-between items-center body-16-r  border-1 border-black-400 rounded-8 ${
            isDropDownOpen || value ? "text-black-1000" : "text-black-400"
          }`}
        >
          {value ? value : children}
          <ChevronDown width="24" height="24"/>
        </div>
        {isDropDownOpen && (
          <div
            className={`h-[357px] py-14 absolute top-0 bg-white w-full flex flex-col justify-between left-0 rounded-8 px-16 border-1 border-black-400`}
          >
            <div onClick={handleResetValue} className="flex justify-between">
              {children}
              <ChevronUp />
            </div>
            {menu.map((c) => (
              <div key={c} onClick={() => handleDropdownValue(c)}>
                {c}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* /* <div
        className={`px-16 w-full relative body-16-r  border-1 border-black-400 rounded-8 ${
          isDropDownOpen ? "text-black-1000" : "text-black-400"
        }`}
      >
        <div
          onClick={toggleDropDown}
          className="flex h-52 w-full items-center justify-between"
        >
          {children}
          {isDropDownOpen ? <ChevronUp /> : <ChevronDown className="h-24 w-24" />}
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
      </div> */}
    </>
  );
};

export default DropDown;
