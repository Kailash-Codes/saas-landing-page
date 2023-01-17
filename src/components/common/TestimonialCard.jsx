import React from "react";
import quote from '../../static/images/quote.png';

const SectionTestimonials = (props) => {
  return (
    <div className="flex mt-5" style={props.style}>
      <p className="p-5 lg:w-96 z-0 sm:w-[90%] md:w-[70%] w-full font-semibold leading-[22px] text-[15px] bg-[#C4C4C4] rounded-xl">
      <img src={quote} className=" h-10 relative mt-[-40px] mb-3" class={props.className}/>
          {props.sayings}
        <small className="block mt-2 ">{props.declarer}</small>
      </p>
    </div>
  );
};

export default SectionTestimonials;
