import React from "react";
import Values from "./Values";
import purple from "../../static/images/values/purple.png";
import orange from "../../static/images/values/orange.png";
import yellow from "../../static/images/values/yellow.png";
const values = [
  {
    number:"01",
    image:purple,
    heading:"Connect wallets & companies",
    desc:"Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "
  },
  {
    number:"02",
    image:orange,
    heading:"Review transactions",
    desc:"Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
  },
  {
    number:"03",
    image:yellow,
    heading:"Get income insights",
    desc:"Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
  }
]
const ValueContainer = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between lg:gap-0">
      {values.map((item,index)=>  <Values
        key={index}
        number={item.number}
        photo={item.image}
        heading={item.heading}
        desc={item.desc}
      />)}
    </div>
  );
};

export default ValueContainer;
