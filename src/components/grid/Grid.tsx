import { FC, ReactNode } from "react";

type gridProps = {
  children: ReactNode;
};

const Grid: FC<gridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-2 md:w-96 w-[75%]">{children}</div>
  );
};

export default Grid;
