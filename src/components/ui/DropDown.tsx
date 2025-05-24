"use client";

import { ChevronDown, ChevronUp } from "@/assets/svgs/icons";
import { useDropDownControl } from "@/hooks/dropDownControl";

interface DropDownProps {
  children: string;
  options: string[];
  value?: string;
  setValue?: (v: string) => void;
}

const DropDown = ({ children, options, value, setValue }: DropDownProps) => {
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
    <div className="relative w-full body-16-r">
      {isDropDownOpen ? (
        <ol
          className={`h-[357px] py-14 absolute top-0 bg-white w-full flex flex-col justify-between left-0 rounded-8 px-16 border-1 border-black-400`}
        >
          <li>
            <button
              onClick={handleResetValue}
              className="flex justify-between"
            >
              {children}
              <ChevronUp />
            </button>
          </li>

          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleDropdownValue(option)}
            >
              {option}
            </li>
          ))}
        </ol>
      ) : (
        <button
          onClick={openDropDown}
          className={`px-16 w-full h-52 flex justify-between items-center body-16-r  border-1 border-black-400 rounded-8 ${
            isDropDownOpen || value ? "text-black-1000" : "text-black-400"
          }`}
        >
          {value ? value : children}
          <ChevronDown className="h-24 w-24" />
        </button>
      )}
    </div>
  );
};

export default DropDown;
