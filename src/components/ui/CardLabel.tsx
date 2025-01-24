const CardLabel = ({ title, value }: { title: string; value: string }) => {
  return (
    <>
      <p className="caption-r text-text-gray">{title}</p>
      <p className="caption-r">{value}</p>
    </>
  );
};

export default CardLabel;
