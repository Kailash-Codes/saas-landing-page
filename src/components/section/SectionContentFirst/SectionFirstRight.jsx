import React from "react";
import SectionRightCheckBox from "./SectionRightCheckBox";
import SectionRightDesc from "./SectionRightDesc";
import SectionRightHeading from "./SectionRightHeading";
import SectionRightTop from "./SectionRightTop";

const SectionFirstRight = () => {
  return (
    <div className="">
      <SectionRightTop />
      <SectionRightHeading />
      <SectionRightDesc />
      <SectionRightCheckBox />
    </div>
  );
};

export default SectionFirstRight;
