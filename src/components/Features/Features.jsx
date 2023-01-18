import React from "react";
import Box from "./Box";
import orange from "../../static/images/values/orange.png";
import purple from "../../static/images/values/purple.png";
const details = [
  {
    src: orange,
    heading: "Really boy law county she unable her sister",
    desc: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    lastHeading:"Merits behind on afraid or warmly"
  },
  {
    src: purple,
    heading: "Among six are leave law built now",
    desc: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    lastHeading:"Merits behind on afraid or warmly"

},
];
const Features = () => {
  return (
    <div className="g">

    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {details.map((item)=>  <Box
        src={item.src}
        heading={item.heading}
        desc={item.desc}
        />)}
    <div className="grid gap-4">
    {details.map((item)=><Box heading={item.lastHeading} />)}
    </div>
    </div>
        </div>
  );
};

export default Features;
