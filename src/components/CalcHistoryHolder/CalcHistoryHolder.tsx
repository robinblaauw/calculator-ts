import { FC } from "react";

type CalcHistoryProps = {
  history: string[];
};

const CalcHistoryHolder: FC<CalcHistoryProps> = ({ history }) => {
  return (
    <div className="md:w-48 w-[22%] mt-24 flex-col-reverse flex justify-end relative pt-4">
      {history.length > 0 &&
        history.map((historyStr, index) => {
          let calculation = historyStr.split("=")[0];
          let result = historyStr.split("=").pop();
          return (
            <div className="text-white ml-2 text-right mb-5">
              <p
                className=" text-base opacity-70 my-0 leading-none"
                key={index}
              >
                {`${calculation} =`}
              </p>
              <p className="text-2xl my-0">{result}</p>
            </div>
          );
        })}
      <div className="absolute w-full h-[180px] bg-gradient-to-t from-neutral-800 bottom-0" />
    </div>
  );
};

export default CalcHistoryHolder;
