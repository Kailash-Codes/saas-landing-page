import React from "react";
import StatNumber from "./StatNumber";
import StatText from "./StatText";

const StatBox = () => {
  return (
    <div className="p-5 text-center">
      <StatNumber />
        <StatText />
    </div>
  );
};

export default StatBox;