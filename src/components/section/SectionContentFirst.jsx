import React from "react";
import SectionFirstLeft from "./SectionFirstLeft";
import SectionFirstRight from "./SectionFirstRight";

const SectionContentFirst = () => {
  return <div className=" mt-20 bg-[#FAFBfe] h-56 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <SectionFirstLeft />
    <SectionFirstRight />
  </div>;
};

export default SectionContentFirst;
