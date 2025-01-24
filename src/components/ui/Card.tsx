import CardFooter from "./CardFooter";
import CardProfile from "./CardProfile";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full bg-white rounded-xl border shadow-sm flex flex-col gap-y-12  py-12  px-20 ">
      <CardProfile />
      {children}
      <hr className=" bg-light-gray" />
      <CardFooter />
    </section>
  );
};

export default Card;
