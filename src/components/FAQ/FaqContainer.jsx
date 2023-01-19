import React from "react";
import BigHeading from "../common/BigHeading";
import Faq from "./Faq";
import FaqAnyQuestionBox from "./FaqAnyQuestionBox";
const details = [
    {
        heading:"The expense windows adapted sir. Wrong widen drawn.",
        desc:"Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. "
    },
    {
        heading:"Six curiosity day assurance bed necessary?"
    },
    {
        heading:"Produce say the ten moments parties?"
    },
    {
        heading:"Simple innate summer fat appear basket his desire joy?"
    },
    {
        heading:"Outward clothes promise at gravity do excited?"
    }
]
const FaqContainer = () => {
  return (
    <div className="lg:px-28 p-5 bg-[#FAFBFF]">
      <BigHeading
        text={`Fequently 
asked questions`}
      />
      <div className="py-5 grid gap-10 lg:gap-40 md:grid-cols-2">
        <div className="lg:w-[145%] md:w-[130%]">

    {details.map((detail,ind)=><Faq
    jey={ind} 
    heading={detail.heading}
    desc={detail.desc} />)}
    </div>
    <div>
        <FaqAnyQuestionBox />
    </div>
      </div>
    </div>
  );
};

export default FaqContainer;
