import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="pt-10 w-[90%] mx-auto p-4 ">
      <h1 className="text-2xl uppercase font-semibold text-sky-900">
        <FontAwesomeIcon icon={faBookReader} className="text-lime-900" /> Habit
        for read book
      </h1>
      <h4 className="mt-4 text-2xl text-lime-600">Select your book</h4>
    </div>
  );
};

export default Header;
