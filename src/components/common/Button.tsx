"use client";

const Button = ({
  onClick,
  disabled,
  classname = "bg-black-1000 text-white",
  children,
  size,
}: {
  onClick?: () => void;
  disabled?: boolean;
  classname?: string;
  children: string;
  size: "m" | "s";
}) => {
  const btnSize: Record<string, string> = {
    m: "title-18-r py-14 rounded-12",
    s: "body-14-r py-8 rounded-8",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full ${classname} ${btnSize[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
