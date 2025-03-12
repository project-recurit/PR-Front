import CardFooter from "./CardFooter";
import CardProfile from "./CardProfile";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex w-full flex-col gap-y-12 rounded-xl border bg-white px-20 py-12 shadow-sm">
      <CardProfile />
      {children}
      <hr className="bg-black-200" />
      <CardFooter />
    </section>
  );
};

export default Card;
