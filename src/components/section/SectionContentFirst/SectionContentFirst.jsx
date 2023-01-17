import React from "react";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
const SectionContentFirst = () => {
  return <div className=" mt-20 bg-[#FAFBfe] grid grid-cols-1 sm:grid-cols-2 gap-4">
    <SectionLeft />
    <SectionRight />
  </div>;
};

export default SectionContentFirst;
