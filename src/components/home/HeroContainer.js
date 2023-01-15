import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const HeroContainer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default HeroContainer;
