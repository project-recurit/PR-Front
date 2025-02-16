import { Search } from "@/assets/icons";

const SearchBar = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <>
      {label && <p className="mb-12 body-16-b">{label}</p>}
      <div
        className={`group items-center flex flex-row justify-between px-16 w-full h-fit relative body-16-r border-1 border-black-400 rounded-8 
    }`}
      >
        <input
          className="w-full py-14 focus:outline-none"
          placeholder={placeholder}
        ></input>
        <Search className="min-w-fit text-black-400 group-focus-within:text-black-1000" />
      </div>
    </>
  );
};

export default SearchBar;
