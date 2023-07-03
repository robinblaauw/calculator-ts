import { FC, ReactNode } from "react";
import classNames from "classnames";

type gridRowProps = {
  children: ReactNode;
  noGap?: boolean;
  colspan: string;
};

const GridRow: FC<gridRowProps> = ({ children, noGap, colspan }) => {
  const gridClasses = classNames("grid", {
    "col-span-1": colspan === "1",
    "col-span-3 grid-cols-3": colspan === "3",
    "col-span-4 grid-cols-1": colspan === "4",
    "gap-2": !noGap,
  });

  return <div className={gridClasses}>{children}</div>;
};

export default GridRow;
