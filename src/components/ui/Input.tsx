"use client";

const Input = ({
  placeholder,
  classname,
  value,
  onChange,
}: {
  placeholder: string;
  classname?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-16 h-52 body-16-r placeholder:body-16-b placeholder:text-black-400 text-black-1000 border-1 border-black-400 rounded-8 focus:outline-none ${
        classname && classname
      }`}
    ></input>
  );
};

export default Input;
