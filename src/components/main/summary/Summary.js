import React from "react";
import AddBreak from "./addbrea/AddBreak";
import ExerciseDetails from "./exerciseDetails/ExerciseDetails";

const summaryDetails = {
  name: "Rakibul Islam",
  address: "Sherpur, Mymensingh, Bangladesh",
  weight: 72,
  height: 5.6,
  age: 23,
  images: "https://i.ibb.co/WFYph7d/me.jpg",
  id: 4524532454447,

  breakTime: {
    first: 2.5,
    second: 5,
    third: 7.5,
    forth: 10,
    fifth: 15,
  },
};
const { name, address, weight, height, age, images, id } = summaryDetails;

const Summary = () => {
  return (
    <div className=" sticky top-0 pt-7">
      <div className="flex justify-evenly">
        <div>
          <img src={images} alt="me" className="w-[50px] btn-circle" />
        </div>
        <div>
          <h4 className="font-semibold text-base">{name}</h4>
          <p className="font-extralight text-xs">{address}</p>
        </div>
      </div>
      <div className="mt-10 flex justify-evenly">
        <span>
          <p className="font-bold">
            {weight} <sub className="font-thin">Kg</sub>
          </p>
          <p className="thin">Weight</p>
        </span>
        <span>
          <p className="font-bold">
            {height} <sub className="font-thin">Fit</sub>
          </p>
          <p className="thin">Height</p>
        </span>
        <span>
          <p className="font-bold">
            {age} <sub className="font-thin">Years</sub>
          </p>
          <p className="thin">Age</p>
        </span>
      </div>

      <AddBreak summaryDetails={summaryDetails}></AddBreak>
      <ExerciseDetails></ExerciseDetails>
    </div>
  );
};

export default Summary;
