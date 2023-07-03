import React, { FC } from "react";
// import classNames from "classnames";
import { data } from "../../data";
import Button from "../Button/Button";
import GridRow from "../grid/GridRow";

type CalculatorButtonProps = {
  retrieveButtonValue: (val: string, type: string) => void;
  selectedButton: string;
};

const CalculatorButtons: FC<CalculatorButtonProps> = ({
  retrieveButtonValue,
  selectedButton,
}) => {
  const passData = (val: string, type: string) => {
    retrieveButtonValue(val, type);
  };

  return (
    <>
      <GridRow colspan="3">
        <GridRow colspan="3">
          {data.special.map((item, index) => {
            return (
              <Button
                key={index}
                val={item.value}
                type="special"
                label={item.value}
                onClick={() => {
                  passData(item.value, "special");
                }}
              />
            );
          })}
        </GridRow>
        <GridRow colspan="3">
          {data.regular.map((item, index) => {
            return (
              <Button
                span={item.value === "0" ? "large" : ""}
                key={index}
                val={item.value}
                type="regular"
                label={item.value}
                onClick={() => {
                  passData(item.value, "regular");
                }}
              />
            );
          })}
        </GridRow>
      </GridRow>
      <GridRow colspan="1">
        {data.arithmetic.map((item, index) => {
          return (
            <Button
              selected={selectedButton}
              key={index}
              val={item.value}
              type="arithmetic"
              label={item.value}
              onClick={() => {
                passData(item.value, "arithmetic");
              }}
            />
          );
        })}
      </GridRow>
    </>
  );
};

export default CalculatorButtons;
