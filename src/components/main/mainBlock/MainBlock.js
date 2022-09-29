import React from "react";

const MainBlock = ({ book, onClickTimerAdd }) => {
  const { title, images, time, description, reading, id } = book;
  // console.log(images);
  return (
    <div>
      <div>
        <div className="card w-full bg-base-100 border rounded-lg">
          <figure>
            <img src={images} alt="book" className="w-full h-[160px]" />
          </figure>
          <div className="card-body p-2">
            <h2 className="card-title">{title}</h2>
            <p>{description.substring(0, 80)}</p>
            <p>
              Time require: <strong>{time} hours</strong>
            </p>
            <p>{reading}</p>
            <div className="card-actions justify-end mt-7">
              <button
                onClick={() => onClickTimerAdd(time)}
                className="bg-lime-900 py-2 px-4 text-white rounded w-full"
              >
                Add to list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
