import { filterMenu } from "@/type/category";

const Filter = () => {
  return (
    <div className="flex gap-x-[8px] py-[12px] px-[16px] shadow-[0_3px_5px_0_rgba(0,0,0,0.05)]">
      {filterMenu.map((m) => (
        <button
          key={m}
          className="px-[16px] py-[8px] border rounded-full caption-s"
        >
          {m}
        </button>
      ))}
    </div>
  );
};

export default Filter;
