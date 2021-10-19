import React from "react";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import HeroFeature from "../../components/HeroFeature/HeroFeature";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroFeature />
      <About />
      <Services />
      <News />
    </>
  );
};

export default Home;
