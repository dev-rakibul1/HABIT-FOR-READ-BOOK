import React from "react";

const ExerciseDetails = ({ calculate, breakTime }) => {
  // total calculate
  const totalTime = calculate.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return (
    <div className="mt-10">
      <h4 className="text-lime-900 font-semibold">Reading time details</h4>
      <div className="flex justify-evenly mt-4">
        <span className="font-bold">Reading time</span>
        <span className="text-gray-400">{totalTime} Hours</span>
      </div>
      <div className="flex justify-evenly mt-4">
        <span className="font-bold">break time</span>
        <span className="text-gray-400">
          {breakTime ? breakTime : 0} minutes
        </span>
      </div>
      <button className="bg-lime-900 py-2 px-4 w-full text-white rounded mt-7">
        Activity Completed
      </button>
    </div>
  );
};

export default ExerciseDetails;
