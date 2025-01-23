const CardLabel = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="grid grid-cols-2">
      <p className="caption-r text-text-gray">{title}</p>
      <p className="caption-r">{value}</p>
    </div>
  );
};

export default CardLabel;
