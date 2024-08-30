import React from "react";
import Banner from "../../Components/Banner/Banner";
import Workers from "../../Components/Workers/Workers";
import About from "../../Components/About/About";
import Technicians from "../../Components/Technicians/Technicians";

const AboutPage = () => {
  return (
    <>
      <section className="about-page">
        <div className="container">
          <Banner heading="About Us" span="ABOUT" />
        </div>
      </section>
      <Workers />
      <About />
      <Technicians />
    </>
  );
};

export default AboutPage;
