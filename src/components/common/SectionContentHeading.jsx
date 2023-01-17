import React from "react";

const SectionRightHeading = (props) => {
  return (
    <h1
      className="
      text-[60px]
      leading-[60px]
    lg:text-[50px] 
    md:text-[40px]
    md:text-[30px]
    md:leading-[40px]
    font-black
    lg:w-[90%]
    lg:leading-[60px]"
    >
      {props.heading}{" "}
    </h1>
  );
};

export default SectionRightHeading;
