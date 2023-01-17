import React from "react";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

const SectionContentSecond = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
    <SectionLeft />
    <SectionRight />
  </div>;
};

export default SectionContentSecond;
