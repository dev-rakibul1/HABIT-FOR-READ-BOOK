import React from "react";

const AddBreak = ({ summaryDetails }) => {
  const { first, second, third, forth, fifth } = summaryDetails.breakTime;

  return (
    <div className="mt-10">
      <h4 className="text-lime-900 font-semibold">Add A Break</h4>
      <div className="flex justify-evenly mt-5">
        <span className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1">
          {first}m
        </span>
        <span className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1">
          {second}m
        </span>
        <span className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1">
          {third}m
        </span>
        <span className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1">
          {forth}m
        </span>
        <span className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1">
          {fifth}m
        </span>
      </div>
    </div>
  );
};

export default AddBreak;
