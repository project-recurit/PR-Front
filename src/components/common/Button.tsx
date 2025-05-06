"use client";

const Button = ({
  onClick,
  disabled,
  className = "bg-black-1000 text-white",
  children,
  size,
  type,
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: string;
  size: "m" | "s";
  type?: "button" | "submit" | "reset";
}) => {
  const btnSize: Record<string, string> = {
    m: "title-18-r py-14 rounded-12",
    s: "body-14-r py-8 rounded-8",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full ${className} ${btnSize[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
