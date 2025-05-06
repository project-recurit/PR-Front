interface CardLabelProps {
  title: string;
  value: string;
}

const CardLabel = ({ title, value }: CardLabelProps) => {
  return (
    <>
      <p className="caption-r text-black-400">{title}</p>
      <p className="caption-r">{value}</p>
    </>
  );
};

export default CardLabel;
