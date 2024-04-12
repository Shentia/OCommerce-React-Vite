import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  return (
    <div>
      <HeroSection
        title="iPhone 14 Pro"
        subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link="/"
        image={iphone}
      />
      <FeatureProducts />
      <HeroSection
        title="Build unlimited setup"
        subtitle="you can add studio display, magic keyboard, and magic mouse."
        link="/"
        image={mac}
      />
    </div>
  );
};

export default Home;
