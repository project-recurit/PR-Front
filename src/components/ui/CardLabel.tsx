interface CardLabelProps {
  title: string;
  value: string;
}

const CardLabel = ({ title, value }: CardLabelProps) => {
  return (
    <>
      <p className="caption-12-r text-black-700">{title}</p>
      <p className="caption-12-r">{value}</p>
    </>
  );
};

export default CardLabel;
