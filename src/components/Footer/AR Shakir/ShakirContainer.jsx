import React from "react";
import FooterDesc from "../common/FooterDesc";
import FooterHeading from "../common/FooterHeading";
import SocialsContainer from "./Socials/SocialsContainer";

const ShakirContainer = () => {
  return (
    <div className="lg:col-span-1">
      <FooterHeading heading="AR SHAKIR" />
      <FooterDesc type="small" desc="Finance helps companies manage payments easily." />
      <SocialsContainer />
    </div>
  );
};

export default ShakirContainer;
