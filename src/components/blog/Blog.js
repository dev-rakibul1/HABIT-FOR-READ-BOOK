import React from "react";
import SingleBlog from "./singleBlog/SingleBlog";

const blog = () => {
  const blogData = [
    {
      title: "blog title 01",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odit doloremque animi vel porro itaque maiores, molestiae voluptate dolorum necessitatibus. Architecto, ratione asperiores laboriosam et exercitationem minima voluptatum quam consequatur.",
      id: 568764,
    },
    {
      title: "blog title 02",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odit doloremque animi vel porro itaque maiores, molestiae voluptate dolorum necessitatibus. Architecto, ratione asperiores laboriosam et exercitationem minima voluptatum quam consequatur.",
      id: 554441,
    },
    {
      title: "blog title 03",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odit doloremque animi vel porro itaque maiores, molestiae voluptate dolorum necessitatibus. Architecto, ratione asperiores laboriosam et exercitationem minima voluptatum quam consequatur.",
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
