import React from "react";
import FirstText from "./FirstText";
import StatBox from "./StatBox";

const StatContainer = () => {
  return <div className="text-white 
  lg:px-28 
  px-5 
  bg-[#3734A9]
  flex
  lg:flex-row
  flex-col
  ">
    <div><FirstText /></div>
    <div className="grid grid-cols-3 lg:gap-10 pl-5">
        <StatBox />
        <StatBox />
        <StatBox />
    </div>
  </div>;
};

export default StatContainer;
