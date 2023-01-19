import React from "react";
import BestPractices from "./BestPractices";
import BlogImage from "./BlogImage";
import BlogTopic from "./BlogTopic";
import ReadMore from "./ReadMore";

const BlogCard = ({ text, readMore, src, size }) => {
  let className = "";
  if (size === "big") {
    className = `grid
     grid-cols-1
     rounded-2xl
     sm:grid-cols-2
     justify-between
     sm:items-center
     bg-[#fff]
     my-5 `;
  } else if (size === "small") {
    className = `
    flex flex-col
    justify-between
    rounded-2xl
    bg-white
    hover:scale-105 transition duration-300 `;
  }
  return (
    <div className={className}>
      <div className="texts pl-5">
        <BestPractices />
        <BlogTopic text={text} />
        {readMore ? <ReadMore /> : null}
      </div>
      <div className="image">
        <BlogImage src={src} size={size} />
      </div>
    </div>
  );
};

export default BlogCard;
