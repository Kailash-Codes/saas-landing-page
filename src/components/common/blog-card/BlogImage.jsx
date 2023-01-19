import React from "react";

const BlogImage = ({ src,size }) => {
  let className=''
  if(size==="big"){
    className=`border md:w-[80%] sm:float-right`
  }
  else if(size==="small"){
    className=``
  }
  return (
    <div className={className}>
      <img className="w-full lg:w-auto" src={src} alt="Blog-image" />
    </div>
  );
};

export default BlogImage;
