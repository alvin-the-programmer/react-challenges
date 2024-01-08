import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [percent, setPercent] = useState(30);

  const size = [
    "w-0",
    "w-[10%]",
    "w-[20%]",
    "w-[30%]",
    "w-[40%]",
    "w-[50%]",
    "w-[60%]",
    "w-[70%]",
    "w-[80%]",
    "w-[90%]",
    "w-[100%]",
  ];

  return (
    <div className="flex flex-col items-center mt-40">
      <div className="text-orange-500 text-4xl">{percent}%</div>
      <div className="mt-16 text-3xl text-orange-400 flex items-center justify-center">
        <i
          className="fa-solid fa-square-minus cursor-pointer"
          onClick={() => {
            if (percent > 0) {
              setPercent(percent - 10);
            }
          }}
        ></i>
        <div className="w-80 h-8 border border-slate-300 m-4 rounded-full">
          <div className={clsx("h-full bg-orange-400 rounded-full", size[percent / 10])}></div>
        </div>
        <i
          className="fa-solid fa-square-plus cursor-pointer"
          onClick={() => {
            if (percent < 100) {
              setPercent(percent + 10);
            }
          }}
        ></i>
      </div>
    </div>
  );
};

export default App;
