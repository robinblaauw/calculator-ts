import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  test("if button is rendering", () => {
    render(
      <Button val={"test"} type="normal" label={"test"} onClick={() => {}} />
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});
