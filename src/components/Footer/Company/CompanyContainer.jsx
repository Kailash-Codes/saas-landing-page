import React from "react";
import FooterHeading from "../common/FooterHeading";
import NavList from "../common/NavList";
const lists = [
  {
    link: "About Us",
  },
  {
    link: "Career",
  },
  {
    link: "Blog",
  },
  {
    link: "Pricing",
  },
];
const CompanyContainer = () => {
  return (
    <div className="lg:col-span-1">
      <FooterHeading heading="Company" />
      <div className="lists">
        {lists.map((link)=><NavList item={link.link} />)}
      </div>
    </div>
  );
};

export default CompanyContainer;
