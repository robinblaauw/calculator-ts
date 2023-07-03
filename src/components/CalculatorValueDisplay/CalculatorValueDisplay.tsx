import { FC } from "react";
import GridRow from "../grid/GridRow";

type ValueDisplayProps = {
  currentDisplay: string;
  savedDisplay: string;
  savedArithmetic: string;
};

const CalculatorValueDisplay: FC<ValueDisplayProps> = ({
  currentDisplay,
  savedDisplay,
  savedArithmetic,
}) => {
  return (
    <GridRow colspan="4" noGap={true}>
      <div className="text-right text-white text-xl relative">
        {savedDisplay}
        <div className="absolute -right-6 top-0">{savedArithmetic}</div>
      </div>
      <div className="text-right text-white text-4xl">{currentDisplay}</div>
    </GridRow>
  );
};

export default CalculatorValueDisplay;
