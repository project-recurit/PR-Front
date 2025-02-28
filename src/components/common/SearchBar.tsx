import { Search } from "@/assets/icons";

const SearchBar = ({ label, placeholder }: { label: string; placeholder: string }) => {
  return (
    <>
      {label && <p className="body-16-b mb-12">{label}</p>}
      <div
        className={`body-16-r } group relative flex h-fit w-full flex-row items-center justify-between rounded-8 border-1 border-black-400 px-16`}
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
