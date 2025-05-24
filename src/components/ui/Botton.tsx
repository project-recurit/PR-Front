"use client";

interface Botton {
  children: string | React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "black" | "white";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: () => void;
}

const Botton = ({ children, size = "small", color = "black", className, type, disabled, onClick }: Botton) => {
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
      className={`${buttonSize[size]} ${buttonColor[color]} h-52 p-10 rounded-12 ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Botton;
