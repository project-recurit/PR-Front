import { useState } from "react";

export const useDropDownControl = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const openDropDown = () => {
    setIsDropDownOpen(true);
  };

  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };

  return { isDropDownOpen, toggleDropDown, openDropDown, closeDropDown };
};
