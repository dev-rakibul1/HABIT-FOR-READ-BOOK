import React, { useEffect, useState } from "react";
import Header from "././../header/Header";
import MainBlock from "./mainBlock/MainBlock";
import Summary from "./summary/Summary";

const Main = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./fakedata/fakeDB.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="w-[90%] mx-auto p-4 ">
      <Header></Header>
      <h4>Select your book</h4>
      <div className="md:flex gap-4">
        <div className="md:w-[75%] mx-auto w-[95%] p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {books.map((book) => (
            <MainBlock book={book} key={book.id}></MainBlock>
          ))}
        </div>
        <div className="md:w-[25%] mx-auto w-[95%]  md:mt-0 mt-5 p-4 border">
          <Summary></Summary>
        </div>
      </div>
    </div>
  );
};

export default Main;