import React from "react";
import BlogCard from "../../common/blog-card/BlogCard";
import image from '../../../static/images/blogs/first.png';

const FirstContainer = () => {
  return (
    <div className="mt-4">

  <BlogCard 
  text="In design active temper be uneasy. Thirty for remove plenty regard."
  src={image}
  readMore={true}
  size="big"
  />
  </div>
  )
};

export default FirstContainer;
