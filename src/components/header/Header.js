import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl uppercase font-semibold text-sky-900">
        <FontAwesomeIcon icon={faBookReader} className="text-lime-900" /> Habit
        for read book
      </h1>
    </div>
  );
};

export default Header;
