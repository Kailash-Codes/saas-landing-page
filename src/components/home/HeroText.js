import React from "react";
import ButtonGroup from "./ButtonGroup";
import CheckBoxContainer from "./CheckBoxContainer";
import SmallText from "./SmallText";

const HeroText = () => {
  return (
    <div className="flex-stretch w-full sm:text-start text-center sm:w-1/2">
      <p className="text-6xl wrap-word leading-[80px] mt-[100px] topics ">
      Managing freelance payments has never been easier
        </p>
      <SmallText />
    <ButtonGroup />
    <CheckBoxContainer />
    </div>
  );
};

export default HeroText;
