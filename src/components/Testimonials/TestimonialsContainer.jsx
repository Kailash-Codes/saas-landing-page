import React from "react";
import BigHeading from "../common/BigHeading";
import SectionContentDesc from "../common/SectionContentDesc";
import Testimonials from './Testimonials';
const TestimonialsContainer = () => {
  return (
    <div className=" lg:px-28 md:px-20 px-5 py-10">
      <BigHeading text="Testimonials" />
      <br/>
      <SectionContentDesc
        width="small"
        desc="We so opinion friends
     me message as delight. Whole front do of plate 
     heard oh ought. His defective nor convinced
      residence own."
      />
      <Testimonials />
    </div>
  );
};

export default TestimonialsContainer;
