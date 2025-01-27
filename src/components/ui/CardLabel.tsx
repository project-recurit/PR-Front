const CardLabel = ({ title, value }: { title: string; value: string }) => {
  return (
    <>
      <p className="caption-r text-black-400">{title}</p>
      <p className="caption-r">{value}</p>
    </>
  );
};

export default CardLabel;
