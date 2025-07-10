// pages/easyPaisaDashboardUi.js

import React from "react";
import Header from "../component/Header"; // ✅ adjust path if needed
import HeroWrapper from "../component/HeroWrapper";
import FeatureWrapper from "../component/FeatureWrapper";
import BlogWrapper from "../component/BlogWrapper";
import FooterWrapper from "../component/FooterWrapper";

const EasyPaisaDashboardUi = () => {
  return (
    <>
      <Header />
      <HeroWrapper />
      <FeatureWrapper />
      <BlogWrapper />
      <FooterWrapper />
    </>
  );
};

export default EasyPaisaDashboardUi;
