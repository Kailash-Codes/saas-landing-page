import React from "react";
import BlogsContainer from "./components/blogs/BlogsContainer";
import CompaniesContainer from "./components/companies/CompaniesContainer";
import FaqContainer from "./components/FAQ/FaqContainer";
import FeatureContainer from "./components/Features/FeatureContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import Home from "./components/home/Home";
import ManageContainer from "./components/ManagingSpending/ManageContainer";
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
      <BlogsContainer />
      <FaqContainer />
      <ManageContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
