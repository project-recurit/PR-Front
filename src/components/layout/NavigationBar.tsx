import { NAV_MENU } from "@/assets/constantData";

const NavigationBar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white h-56  main-contain flex px-40 py-8 justify-between">
      {NAV_MENU.map(({ title, Component }) => (
        <div key={title} className="flex flex-col justify-center items-center">
          <Component />
          <p className="caption-10">{title}</p>
        </div>
      ))}
    </nav>
  );
};

export default NavigationBar;
