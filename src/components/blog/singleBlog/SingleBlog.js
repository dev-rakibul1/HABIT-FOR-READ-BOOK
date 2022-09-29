import React from "react";

const SingleBlog = ({ blogData }) => {
  const { title, description } = blogData;
  console.log(title);
  return (
    <div className="mt-10 border rounded bg-white p-4">
      <h1 className="font-bold text-xl text-lime-900">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default SingleBlog;
