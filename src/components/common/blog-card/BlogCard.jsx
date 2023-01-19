import React from "react";
import BestPractices from "./BestPractices";
import BlogImage from "./BlogImage";
import BlogTopic from "./BlogTopic";
import ReadMore from "./ReadMore";

const BlogCard = ({ text, readMore, src, size }) => {
  let className = "";
  if (size === "big") {
    className = 
    "grid grid-cols-1 pl-5 rounded-2xl sm:grid-cols-2 justify-between sm:items-center bg-[#fff]";
  } else if (size === "small") {
  }
  return (
    <div className={className}>
      <div className="texts">
        <BestPractices />
        <BlogTopic text={text} />
        {readMore ? <ReadMore /> : null}
      </div>
      <div className="image">
        <BlogImage src={src} />
      </div>
    </div>
  );
};

export default BlogCard;
