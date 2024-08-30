import React from "react";
import AboutImage from "../../assets/about.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="about overflow-hidden">
      <div className="container mt-24 grid grid-cols-1 lg:grid-cols-2 pb-10 overflow-x-hidden">
        <div className="image">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            src={AboutImage}
            alt="About Image"
            className="w-[350px] md:w-[600px]"
          />
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="info ms-6"
        >
          <h4 className="text-mainColor font-bold uppercase text-2xl mt-5">
            // About Us //
          </h4>
          <h2 className="mt-4 text-2xl lg:text-4xl font-bold text-secondColor">
            <span className="text-mainColor">CarServ</span> Is The Best Place
            For Your Auto Care
          </h2>
          <p className="mt-5 text-xl">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="information mt-5">
            <div className="flex items-center">
              <h3 className="bg-[#eee] p-5">01</h3>
              <div className="ms-5">
                <h4 className="text-secondColor font-bold">Professional & Expert</h4>
                <p>Diam dolor diam ipsum sit amet diam et eos</p>
              </div>
            </div>
            <div className="flex items-center">
              <h3 className="bg-[#eee] p-5 mt-2">02</h3>
              <div className="ms-5">
                <h4 className="text-secondColor font-bold">Quality Servicing Center</h4>
                <p>Diam dolor diam ipsum sit amet diam et eos</p>
              </div>
            </div>
            <div className="flex items-center">
              <h3 className="bg-[#eee] p-5 mt-2">03</h3>
              <div className="ms-5">
                <h4 className="text-secondColor font-bold">Awards Winning Workers</h4>
                <p>Diam dolor diam ipsum sit amet diam et eos</p>
              </div>
            </div>
          </div>
          <button className="mt-10 flex items-center uppercase bg-mainColor text-white px-10 py-5">
            Read More
            <FaLongArrowAltRight className="ms-3 font-bold" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
