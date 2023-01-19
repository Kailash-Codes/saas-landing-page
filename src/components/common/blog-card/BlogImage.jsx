import React from "react";

const BlogImage = ({ src }) => {
  return (
    <div className=" border md:w-[80%] sm:float-right">
      <img className="w-full  lg:w-auto" src={src} alt="Blog-image" />
    </div>
  );
};

export default BlogImage;
