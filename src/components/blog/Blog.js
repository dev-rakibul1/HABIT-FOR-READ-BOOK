import React from "react";
import SingleBlog from "./singleBlog/SingleBlog";

const blog = () => {
  const blogData = [
    {
      title: "How does the React work?",
      description:
        "React is a component based library. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM",
      id: 568764,
    },
    {
      title: "What is the difference between state and props?",
      description:
        "Props are used to pass data from one component to another. ----Props---- The state is a local data storage that is local to the component only and cannot be passed to other components. The is passed from one component from another components. * It is immutable can not be modify. * Props can be used with state and functional components. *Props are read only. -----State----- The data is passed within components only. *Its mutable can be modify. State can be used only with state components. * State both read and write",

      id: 554441,
    },
    {
      title: "What use effect can be used for without API data load?",
      description:
        "basically useEffcet is a functional hook. It works with just reacting functional components. Normaly it is use application side effect work for example: Timer, counter, setTimeout, setInterval",
      id: 656454,
    },
  ];

  return (
    <div className="w-[90%] mx-auto">
      {blogData.map((singleData) => (
        <SingleBlog blogData={singleData} key={singleData.id}></SingleBlog>
      ))}
    </div>
  );
};

export default blog;
