import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import FilterSixItem from "../components/FilterSixItem.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import OurMission from "../components/OurMission.jsx";
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

      <div data-aos="fade-up" data-aos-delay="200">
        <FilterSixItem />
      </div>

      <div data-aos="zoom-in-up" data-aos-delay="400">
        <HowItWorks />
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <OurMission />
      </div>
    </>
  );
};

export default Home;
