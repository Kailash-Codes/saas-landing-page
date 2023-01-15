import React from "react";
import image from "../.././static/images/home/hands.png";

const HeroImage = () => {
  return (
    <div className="justify-center flex flex-wrap w-full sm:w-1/2">
      <div className="flex">
        <img className="w-96" src={image} alt="#" />
      </div>
    </div>
  );
};

export default HeroImage;
