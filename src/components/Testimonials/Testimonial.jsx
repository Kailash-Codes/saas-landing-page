import React from "react";
import quote from "../../static/images/quote.png";
import Declarer from "./Declarer";
import DeclarerPhoto from "./DeclarerPhoto";
import image from '../../static/images/testimonials-photo/left.png'
import Saying from "./Saying";

const Testimonial = () => {
  return (
    <div className="testi w-96 ml-[50%] border translate-x-[-50%] sm:ml-auto sm:translate-x-0 sm:w-auto flex  -black rounded-xl py-3 mt-5 px-5">
      <div className="rounded-xl">
        <img src={quote} className=" h-10 relative mt-[-40px] mb-3" />
        <div className="flex  flex-wrap sm:flex-nowrap md:flex-wrap md:w-auto lg:flex-nowrap items-center">
        <div className="left">
        <Saying
          saying="Wise busy past both park
          when an ye no. Nay likely her length 
          sooner thrown sex lively income. The 
          expense windows . Blessing welcomed
          ladyship."
          />
        <Declarer declarer="- Mike Taylor, Web Designer" />
          </div>
          <DeclarerPhoto src={image} />
          </div>
      </div>
    </div>
  );
};

export default Testimonial;
