import React from "react";
import BigHeading from '../common/BigHeading';
import SectionContentDesc from '../common/SectionContentDesc';
import Features from "./Features";
const FeatureContainer = () => {
  return <div className="  lg:px-28 md:px-20 px-5 py-10 bg-sky-200">
    <BigHeading text="Features that blow mind"/>
    <SectionContentDesc 
    width="small" 
    desc="We so opinion friends
     me message as delight. Whole front do of plate 
     heard oh ought. His defective nor convinced
      residence own." />
      <br/>
      <Features />

  </div>;
};

export default FeatureContainer;
