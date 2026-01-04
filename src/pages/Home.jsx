import React, { useEffect } from "react";
import Header from "../components/Header";
import FilterSixItem from "../components/FilterSixItem";
import HowItWorks from "../components/HowItWorks";
import OurMission from "../components/OurMission";
import Features from "../components/Features";
import PopularListings from "../components/PopularListings";
import Statistics from "../components/Statistics";
import FAQ from "../components/FAQ";
import CTA from "../components/CallToAction";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <Header />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <FilterSixItem />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Features />
      </div>

      <div data-aos="zoom-in-up" data-aos-delay="300">
        <HowItWorks />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <PopularListings />
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <Statistics />
      </div>

      <div data-aos="fade-up" data-aos-delay="700">
        <OurMission />
      </div>


      <div data-aos="fade-up" data-aos-delay="800">
        <FAQ />
      </div>

      <div data-aos="zoom-in" data-aos-delay="900">
        <CTA />
      </div>
    </>
  );
};

export default Home;
