import {
  switchPositiveNegative,
  concatNumbers,
  percentage,
} from "./transformNumber";

const PositiveNegativeArray = [
  ["1", "-1"],
  ["-1", "1"],
  ["0", "0"],
];

const concatArray = [
  ["3", "5", "35"],
  ["0", "5", "5"],
  ["1", ".", "1."],
  ["1.", ".", "1."],
];

describe("switchPositiveNegative()", () => {
  it.each(PositiveNegativeArray)(
    "Should return the opposite of negative or positive depending on given number",
    (initial, returnedval) => {
      const result = switchPositiveNegative(initial);
      expect(result).toBe(returnedval);
    }
  );
});

describe("concatNumbers()", () => {
  it.each(concatArray)(
    "Should concatenate the first and second numbers together and return the result",
    (val1, val2, expected) => {
      const result = concatNumbers(val1, val2);
      expect(result).toBe(expected);
    }
  );
});

describe("percentage()", () => {
  it("Should get the entered number as a percentage", () => {
    const val = "20";
    const result = percentage(val);
    expect(result).toBe("0.2");
  });
});
