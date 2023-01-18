import React from "react";
import CompaniesContainer from "./components/companies/CompaniesContainer";
import FeatureContainer from "./components/Features/FeatureContainer";
import Home from "./components/home/Home";
import SectionContainer from "./components/section/SectionContainer";
import TestimonialsContainer from "./components/Testimonials/TestimonialsContainer";

const App = () => {
  return (
    <div>
      <Home />
      <CompaniesContainer />
      <SectionContainer />
      <FeatureContainer />
      <TestimonialsContainer />
    </div>
  );
};

export default App;
