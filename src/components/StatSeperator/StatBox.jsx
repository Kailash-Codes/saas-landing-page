import React from "react";
import StatIcon from "./StatIcon";
import StatNumber from "./StatNumber";
import StatText from "./StatText";

const StatBox = ({type,statText,number}) => {
  return (
    <div className="p-5 text-center">
      <StatNumber number={number} />
      <span className="flex gap-1 justify-center items-center">
        <StatIcon type={type}/>
      <StatText text={statText} />
      </span>
    </div>
  );
};

export default StatBox;