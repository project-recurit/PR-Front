"use client";

import type { ReactNode } from "react";

interface Button {
  children: string | ReactNode;
  size?: "small" | "medium" | "large";
  color?: "black" | "white";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  size = "small",
  color = "black",
  className = "",
  type,
  disabled = false,
  onClick,
}: Button) => {
  const buttonSize = {
    small: "w-128",
    medium: "w-164",
    large: "w-full",
  };

  const buttonColor = {
    black: "bg-black text-white",
    white: "bg-white border border-black",
  };

  return (
    <button
      className={`${buttonSize[size]} ${buttonColor[color]} h-52 rounded-xl p-10 ${className} ${disabled ? "opacity-50" : ""}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
