interface ActionBottonProps {
  label: string;
  size?: "s" | "m" | "l";
  color?: "black" | "white";
  onClick: () => void;
}

const ActionBotton = ({ label, size = "s", color = "black", onClick }: ActionBottonProps) => {
  const buttonSize = {
    s: "w-128",
    m: "w-164",
    l: "w-full",
  };

  const buttonColor = {
    black: "bg-black text-white",
    white: "bg-white border border-black",
  };
  
  return (
    <button
      className={`${buttonSize[size]} ${buttonColor[color]} h-52 p-10 rounded-12 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionBotton;
