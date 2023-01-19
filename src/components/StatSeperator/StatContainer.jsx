import React from "react";
import FirstText from "./FirstText";
import StatBox from "./StatBox";
const details = [
    {
        type:"person",
        statText:"Active Users",
        number:"1M+"
    },
    {
        type:"star",
        statText:"5-Stars Reviews",
        number:"30K+"
    },
    {
        type:"dollar",
        statText:"Transactions",
        number:"$252M"
    }
]
const StatContainer = () => {
  return <div className="text-white 
  lg:px-28
  px-5 
  bg-[#3734A9]
  flex
  lg:flex-row
  flex-col
  ">
    <div className=""><FirstText /></div>
    <div className="grid sm:grid-cols-3 lg:gap-10 py-10 justify-center lg:pl-5">
    {details.map((stats,ind)=><StatBox 
    key={ind}
    number={stats.number} 
    type={stats.type} 
    statText={stats.statText}
     />)}
    </div>
  </div>;
};

export default StatContainer;
