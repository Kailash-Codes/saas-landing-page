import React from "react";

const SectionRightDesc = ({ desc, width }) => {
  let className = "";
  if (width === "small") {
    className = "lg:w-[50%] md:w-[60%] leading-[30px]";
  } else if (width === "big") {
    className = "w-[90%] leading-[30px]";
  }
  return <p className={className}>{desc}</p>;
};

export default SectionRightDesc;
