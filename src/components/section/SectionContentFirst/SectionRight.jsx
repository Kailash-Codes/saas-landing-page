import React from "react";
import WhyChooseUs from "../../common/WhyChooseUs";
import SectionRightCheckBox from "./SectionRightCheckBox";
import SectionContentHeading from "../../common/SectionContentHeading";
import SectionContentDesc from "../../common/SectionContentDesc";

const SectionRight = () => {
  return (
    <div className="">
      <WhyChooseUs />
      <SectionContentHeading
        heading="Track your payments
        on the go with the
        best way possible"
      />
      <SectionContentDesc width="big" desc="
      Indulgence way everything joy 
      alteration boisterous the 
      attachment. Party we years
       to order allow asked of. " />
             <hr className="mt-3" />
      <SectionRightCheckBox />
    </div>
  );
};

export default SectionRight;
