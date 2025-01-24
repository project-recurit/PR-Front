import { filterMenu } from "@/types/category";

const Filter = () => {
  return (
    <div className="flex gap-x-8 py-16 px-16 shadow-[0_3px_5px_0_rgba(0,0,0,0.05)]">
      {filterMenu.map((m) => (
        <button key={m} className="px-16 py-8 border rounded-full caption-s">
          {m}
        </button>
      ))}
    </div>
  );
};

export default Filter;
