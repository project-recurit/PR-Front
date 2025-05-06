interface ActionBottonProps {
  label: string;
  size?: "s" | "m" | "l";
  color?: "black" | "white";
  onClick: () => void;
}

const ActionBotton = ({ label, size = "s", color = "black", onClick }: ActionBottonProps) => {
  return (
    <button
      className={``}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionBotton;
