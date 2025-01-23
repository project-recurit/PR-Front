import ActionTap from "../Home/ActionTap";

const Header = () => {
  return (
    <header className="flex flex-col sticky top-0 z-10 bg-white gap-y-[20px]">
      <div className="title-24-b px-[20px]">LOGO</div>
      <ActionTap />
    </header>
  );
};

export default Header;
