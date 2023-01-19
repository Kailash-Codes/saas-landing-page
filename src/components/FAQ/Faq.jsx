import React from "react";
import FaqHeading from "./FaqHeading";
import SectionContentDesc from "../common/SectionContentDesc";
import PlusIcon from "./PlusIcon";
const Faq = ({heading,desc}) => {
  return (
    <div className=" p-5 border mt-2 bg-white rounded-xl flex justify-between items-center">
        <div>
      <FaqHeading heading={heading} />
      {(desc) ? <SectionContentDesc
        desc={desc}
        /> :null }
        </div>
        <div className=""><PlusIcon /></div>
    </div> 
  );
};

export default Faq;
