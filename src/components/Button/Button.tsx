import React, { FC } from "react";
import classNames from "classnames";

type ButtonProps = {
  val: string;
  onClick: (val: string) => void;
  type?: string;
  selected?: string;
  span?: string;
  label: string;
};

const Button: FC<ButtonProps> = ({
  span,
  val,
  onClick,
  type = "primary",
  selected,
  label,
}) => {
  const gridClasses = classNames(
    "leading-[80px] rounded-md text-xl hover:opacity-90 drop-shadow-md",
    {
      "bg-neutral-200": type === "special",
      "bg-amber-600 text-white": type === "arithmetic",
      "bg-neutral-500 text-white": type === "regular",
      "col-span-2": span === "large",
    }
  );

  return (
    <button
      onClick={() => onClick(val)}
      className={`${gridClasses} ${
        type === "arithmetic" && val === selected
          ? "bg-white text-amber-600 font-bold"
          : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
