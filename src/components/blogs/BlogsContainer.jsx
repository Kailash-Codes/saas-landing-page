import React from "react";
import BigHeading from "../common/BigHeading";
import FirstContainer from "./FirstSection/FirstContainer";
const BlogsContainer = () => {
  return (
    <div className="lg:px-28 px-5 py-16 bg-[#FAFBFF]">
      <BigHeading text="Recent Blogs" />
      <FirstContainer />
    </div>
  );
};

export default BlogsContainer;
