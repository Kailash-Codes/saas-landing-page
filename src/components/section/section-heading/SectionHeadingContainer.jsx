import React from "react";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "../../common/TestimonialCard";
const SectionHeadingContainer = () => {
  return (
    <div className="flex flex-col justify-between  items-center sm:flex-row">
      <SectionHeading />
      <TestimonialCard style={{justifyContent:"center"}}
        sayings=" Wise busy past both park when an ye no. Nay likely her length sooner
        thrown six lively income. The expense windows adapted sir. Wrong widen."
        declarer="- Mike Taylor, Web Designer"
      />
    </div>
  );
};

export default SectionHeadingContainer;
