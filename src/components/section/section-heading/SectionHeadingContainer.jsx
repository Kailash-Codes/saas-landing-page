import React from "react";
import SectionHeading from "./SectionHeading";
import SectionTestimonials from "./SectionTestimonials";

const SectionHeadingContainer = () => {
  return (
    <div className="flex flex-col justify-between  items-center sm:flex-row">
      <SectionHeading />
      <SectionTestimonials />
    </div>
  );
};

export default SectionHeadingContainer;
