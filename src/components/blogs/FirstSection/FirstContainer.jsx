import React from "react";
import BlogCard from "../../common/blog-card/BlogCard";
import image from '../../../static/images/blogs/first.png';
import image1 from '../../../static/images/blogs/second.png';
import image2 from '../../../static/images/blogs/third.png';
import image3 from '../../../static/images/blogs/fourth.png';
const details = [
  {
    text:"Partiality on or continuing particular principles as. ",
    src:image1,
    size:"small"
  },
  {
    text:"Village did removed enjoyed explain",
    src:image2,
    size:"small"
  },
  {
    text:"Wise busy past both park when an ye no. Nay likely her length.",
    src:image3,
    size:"small"
  }
]
const FirstContainer = () => {
  return (
    <div className="mt-4">
      <div className="main-blog">
  <BlogCard 
  text="In design active temper be uneasy. Thirty for remove plenty regard."
  src={image}
  readMore={true}
  size="big"
  />
  </div>
  <div className="small-blogs py-4 grid sm:grid-cols-2 gap-5 lg:grid-cols-3">
    {details.map((detail,ind)=><BlogCard 
    key={ind}
    text={detail.text}
    src={detail.src}
    size={detail.size}
    />)}
  </div>
  </div>
  )
};

export default FirstContainer;
