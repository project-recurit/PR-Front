interface StepLabelProps {
  step: number;
}

const StepLabel = ({ step }: StepLabelProps) => {
  return <h6 className="body-16-m">STEP {step}</h6>;
};

export default StepLabel;
