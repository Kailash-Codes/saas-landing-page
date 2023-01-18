import React from "react";
import WhyChooseUs from "../../common/WhyChooseUs";
import SectionContentHeading from "../../common/SectionContentHeading";
import TestimonialCard from "../../common/TestimonialCard";
import SectionContentDesc from "../../common/SectionContentDesc";

const SectionLeft = () => {
  return (
    <div>
      <WhyChooseUs />
      <SectionContentHeading
        heading="Save money with
        proper transaction"
      />
      <SectionContentDesc
        width="big"
        desc="We so opinion 
       friends me message 
       as delight. Whole front 
       do of plate heard oh ought.
        His defective nor convinced 
        residence own."
      />
      <TestimonialCard
        sayings="Wise busy past both
         park when an ye no. Nay likely 
         her length sooner thrown sex lively
          income"
        declarer="- Mike Taylor, Web Designer"
      />
    </div>
  );
};

export default SectionLeft;
