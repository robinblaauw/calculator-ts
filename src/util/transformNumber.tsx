export const switchPositiveNegative = (numb: string) => {
  const numbStr = +numb;
  const revertedStr = numbStr < 0 ? Math.abs(numbStr) : -Math.abs(numbStr);
  return revertedStr.toString();
};

export const concatNumbers = (currentNumber: string, newNumber: string) => {
  let numbConcat;

  if (currentNumber === "0") {
    numbConcat = newNumber;
  } else if (currentNumber.includes(".") && newNumber === ".") {
    numbConcat = currentNumber;
  } else {
    numbConcat = currentNumber + newNumber;
  }
  return numbConcat;
};

export const percentage = (numb: string) => {
  const toNumb = +numb;
  const percentageCalc = toNumb / 100;
  return percentageCalc.toString();
};
