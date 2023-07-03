type operatorTypes = {
  [key: string]: (firstVal: number, secondVal: number) => number;
};

const operators: operatorTypes = {
  "+": function (firstVal, secondVal) {
    return firstVal + secondVal;
  },
  "-": function (firstVal, secondVal) {
    return firstVal - secondVal;
  },
  "*": function (firstVal, secondVal) {
    return firstVal * secondVal;
  },
  "/": function (firstVal, secondVal) {
    return firstVal / secondVal;
  },
};

export const calculateTotal = (
  firstValue: string,
  secondValue: string,
  arithmatic: string
) => {
  const firstValNum = +firstValue;
  const secondValNum = +secondValue;
  return {
    calculation: `${firstValue} ${arithmatic} ${secondValue} = ${operators[
      arithmatic
    ](firstValNum, secondValNum).toString()}`,
    result: operators[arithmatic](firstValNum, secondValNum).toString(),
  };
};
