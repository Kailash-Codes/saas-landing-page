import React from "react";
import ValuesDesc from "./ValuesDesc";
import ValuesHeading from "./ValuesHeading";
import ValuesPhoto from "./ValuesPhoto";
import purple from "../../static/images/values/purple.png";
import ValueNumber from "./ValueNumber";

const Values = (props) => {
  return (
    <div className="border mb-3 lg:w-[32%] md:w-[49%] w-full text-center py-3 rounded-2xl">
        <ValueNumber number={props.number} />
      <ValuesPhoto photo={props.photo}/>
      <ValuesHeading heading={props.heading} />
      <ValuesDesc desc={props.desc} />
    </div>
  );
};

export default Values;
