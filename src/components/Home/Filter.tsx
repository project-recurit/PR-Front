import { filterMenu } from "@/category";

const Filter = () => {
  return (
    <div className="flex py-[16px] gap-x-[8px]">
      {filterMenu.map((m) => (
        <button
          key={m}
          className="px-[12px] py-[4px] border rounded-full text-sm"
        >
          {m}
        </button>
      ))}
    </div>
  );
};

export default Filter;
