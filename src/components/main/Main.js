import React, { useEffect, useState } from "react";
import MainBlock from "./mainBlock/MainBlock";
import Summary from "./summary/Summary";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [calculate, setCalculate] = useState([]);
  useEffect(() => {
    fetch("./fakedata/fakeDB.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // on Click Timer Add
  const onClickTimerAdd = (time) => {
    const newCalculate = [...calculate, time];
    setCalculate(newCalculate);
  };

  return (
    <div className="w-[90%] mx-auto p-4 ">
      <div className="md:flex gap-4">
        <div className="md:w-[75%] mx-auto w-[95%] p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <MainBlock
              book={book}
              key={book.id}
              onClickTimerAdd={onClickTimerAdd}
            ></MainBlock>
          ))}
        </div>
        <div className="md:w-[25%] mx-auto w-[95%]  md:mt-0 mt-5 p-4 border bg-white">
          <Summary calculate={calculate}></Summary>
        </div>
      </div>
    </div>
  );
};

export default Main;
