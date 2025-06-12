"use client";

import { ChevronDown, ChevronUp } from "@/assets/svgs/icons";
import { useCallback, useState } from "react";

interface DropDownProps {
  defaultValue: string;
  isDropDownOpen: boolean;
  openDropDown: () => void;
  closeDropDown: () => void;
  options: Readonly<string[]>;
  value: string;
  setValue: (v: string) => void;
}

const DropDown = ({
  isDropDownOpen,
  openDropDown,
  closeDropDown,
  defaultValue,
  value,
  setValue,
  options,
}: DropDownProps) => {
  //TODO - value와 selectedValue 동기화
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const handleValue = useCallback(
    (option: string) => {
      setValue(option);
      setSelectedValue(option);
      closeDropDown();
    },
    [setValue, closeDropDown],
  );

  return (
    <div className="body-16-r relative w-full">
      {isDropDownOpen ? (
        <ol
          className={`absolute left-0 top-0 flex h-357 w-full flex-col justify-between rounded-8 border-1 border-black-400 bg-white px-16 py-14`}
        >
          <li>
            <button
              onClick={() => handleValue("")}
              className="flex w-full justify-between"
            >
              {defaultValue}
              <ChevronUp />
            </button>
          </li>

          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleValue(option)}
            >
              {option}
            </li>
          ))}
        </ol>
      ) : (
        <button
          onClick={openDropDown}
          className={`body-16-r flex h-52 w-full items-center justify-between rounded-8 border-1 border-black-400 px-16 ${
            isDropDownOpen || !!selectedValue ? "text-black-1000" : "text-black-400"
          }`}
        >
          {selectedValue || defaultValue}
          <ChevronDown className="h-24 w-24" />
        </button>
      )}
    </div>
  );
};

export default DropDown;
