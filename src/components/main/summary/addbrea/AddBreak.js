import React from "react";

const AddBreak = ({ summaryDetails, breakTimeHandler, books }) => {
  const { first, id1 } = summaryDetails.breakTime[0];
  const { second, id2 } = summaryDetails.breakTime[1];
  const { third, id3 } = summaryDetails.breakTime[2];
  const { forth, id4 } = summaryDetails.breakTime[3];
  const { fifth, id5 } = summaryDetails.breakTime[4];
  // console.log(id1);
  // const { first, second, third, forth, fifth } = summaryDetails.breakTime[0];

  // const data = summaryDetails.breakTime;
  // data.map((x) => console.log(x.id));

  // const [bookid, setBookId] = useState([]);
  // const [justId, setJustId] = useState("");

  // useEffect(() => {
  //   fetch("./fakedata/fakeDB.json")
  //     .then((response) => response.json())
  //     .then((data) => setBookId(data))
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  // bookid.map((id) => console.log(id.id));

  return (
    <div className="mt-10">
      <h4 className="text-lime-900 font-semibold">Add A Break</h4>
      <div className="flex justify-evenly mt-5">
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(first, id1)}
        >
          {first}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(second, id2)}
        >
          {second}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(third, id3)}
        >
          {third}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(forth, id4)}
        >
          {forth}m
        </span>
        <span
          className="w-[40px] h-[40px] text-xs leading-7 hover:text-white cursor-pointer bg-gray-300 hover:bg-lime-900  border text-center btn-circle p-1"
          onClick={() => breakTimeHandler(fifth, id5)}
        >
          {fifth}m
        </span>
      </div>
    </div>
  );
};

export default AddBreak;
