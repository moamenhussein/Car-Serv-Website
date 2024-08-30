import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import LandingImage from "../../assets/landing.png";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <section className="landing pb-10">
      <div className="container flex flex-col lg:flex-row justify-between h-[100vh] items-center">
        <div className="info absolue z-10">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl text-center lg:text-left w-[350px] lg:w-[450px] text-white font-bold pt-40 lg:pt-0"
          >
            Qualified Car Wash Service Center
          </motion.h1>
          <motion.button
          initial={{x: -200, opacity: 0}}
          whileInView={{x: -100, opacity:1}}
          transition={{duration: 0.5, delay: 0.2}}
            className="absolue z-10 bg-mainColor mt-10 flex items-center px-8 py-5 text-white uppercase font-bold relative left-[50%] translate-x-[-50%] lg:left-24"
          >
            <span>Learn More</span>
            <FaLongArrowAltRight className="ms-4" />
          </motion.button>
        </div>
        <div className="image absolue z-10">
          <motion.img
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.8}}
            src={LandingImage}
            alt="Landing Image"
            className="w-[320px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
