import React from "react";
import Testimonial from "./Testimonial";
import firstImg from "../../static/images/testimonials-photo/left.png";
import secondImg from "../../static/images/testimonials-photo/left.png";
const details = [
  {
    saying:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown six lively income. The expense windows . Blessing welcomed ladyship.",
    src: firstImg,
    declarer: "- Mike Taylor, Web Designer",
  },
  {
    saying:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown six lively income. The expense windows . Blessing welcomed ladyship.",
    src: secondImg,
    declarer: "- Mike Taylor, Web Designer",
  },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-5">
      {details.map((detail,ind) => (
        <Testimonial
        key={ind}
          saying={detail.saying}
          src={detail.src}
          declarer={detail.declarer}
        />
      ))}
    </div>
  );
};

export default Testimonials;
