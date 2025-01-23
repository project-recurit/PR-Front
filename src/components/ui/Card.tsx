import CardProfile from "./CardProfile";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full bg-white rounded-xl border shadow-sm flex flex-col gap-y-[8px] py-[12px] px-[20px]">
      <CardProfile />
      {children}
    </section>
  );
};

export default Card;
