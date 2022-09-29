import React from "react";

const AddBreak = ({ summaryDetails, breakTimeHandler }) => {
  const { first, second, third, forth, fifth } = summaryDetails.breakTime;

  // const [breakTime, setBreakTime] = useState("");

  // const breakTimeHandler = (time) => {
  //   setBreakTime(time);
  // };

  return (
    <div className="mt-10">
      <h4 className="text-lime-900 font-semibold">Add A Break</h4>
      <div className="flex justify-evenly mt-5">
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(first)}
        >
          {first}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(second)}
        >
          {second}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(third)}
        >
          {third}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(forth)}
        >
          {forth}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(fifth)}
        >
          {fifth}m
        </span>
      </div>
    </div>
  );
};

export default AddBreak;
