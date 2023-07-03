import { calculateTotal } from "./calculations";

const toBeCalculated = [
  ["0.1", "3", "+", "3.1", "0.1 + 3 = 3.1"],
  ["1", "3", "-", "-2", "1 - 3 = -2"],
  ["4", "2", "/", "2", "4 / 2 = 2"],
  ["3", "3", "*", "9", "3 * 3 = 9"],
];

describe("calculateTotal()", () => {
  it.each(toBeCalculated)(
    "should test the correct outcome of all types of calculations",
    (value1, value2, arithmatic, result, report) => {
      const calculatedValue = calculateTotal(value1, value2, arithmatic);
      expect(calculatedValue.result).toBe(result);
      expect(calculatedValue.calculation).toBe(report);
    }
  );
});
