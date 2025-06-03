import NotificationButton from "../notification/NotificationButton";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="sticky top-0 flex flex-row items-center justify-between px-16 py-9">
      <Link
        href={ROUTES.home}
        className="text-24 font-black leading-tight"
      >
        LOGO
      </Link>
      <NotificationButton />
    </header>
  );
};

export default MainHeader;
