import React from "react";
import CompaniesContainer from "./components/companies/CompaniesContainer";
import FeatureContainer from "./components/Features/FeatureContainer";
import Home from "./components/home/Home";
import SectionContainer from "./components/section/SectionContainer";
import StatContainer from "./components/StatSeperator/StatContainer";
import TestimonialsContainer from "./components/Testimonials/TestimonialsContainer";

const App = () => {
  return (
    <div>
      <Home />
      <CompaniesContainer />
      <SectionContainer />
      <FeatureContainer />
      <TestimonialsContainer />
      <StatContainer />
    </div>
  );
};

export default App;
