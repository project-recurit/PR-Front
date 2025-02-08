import { ChevronDown } from "@/assets/icons";

const DropDown = ({ children }: { children: string }) => {
  return (
    <div className="w-full relative">
      <div className="w-full body-16-r border-1 border-black-400 text-black-400 rounded-8 px-16 py-14 flex justify-between">
        {children}
        <ChevronDown />
      </div>
    </div>
  );
};

export default DropDown;
