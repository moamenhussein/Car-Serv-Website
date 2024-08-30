import React from "react";
import { FaCarSide } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaOilCan } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import ServiceImage from "../../assets/service.jpg";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="services bg-white">
      <div className="container py-20 overflow-x-hidden">
        <div className="info text-center py-11">
          <h3 className="uppercase text-mainColor font-bold text-xl">
            // Our Services //
          </h3>
          <h1 className="mt-5 text-3xl lg:text-4xl text-secondColor font-bold">
            Explore Our Services
          </h1>
        </div>
        <div className="containerInfo grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="iconsandinfo">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center bg-[#eee] py-8 ps-8"
            >
              <h5>
                <FaCarSide className="text-mainColor text-4xl" />
              </h5>
              <h3 className="ms-5 text-2xl font-bold text-secondColor">
                Diagnostic Test
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center mt-10 py-8 bg-[#eee] ps-8"
            >
              <h5>
                <FaCar className="text-mainColor text-4xl" />
              </h5>
              <h3 className="ms-5 text-2xl font-bold text-secondColor">
                Engine Servicing
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center mt-10 py-8 bg-[#eee] ps-8"
            >
              <h5>
                <IoMdSettings className="text-mainColor text-4xl" />
              </h5>
              <h3 className="ms-5 text-2xl font-bold text-secondColor">
                Tires Replacement
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center mt-10 py-8 bg-[#eee] ps-8"
            >
              <h5>
                <FaOilCan className="text-mainColor text-4xl" />
              </h5>
              <h3 className="ms-5 text-2xl font-bold text-secondColor">
                Oil Changing
              </h3>
            </motion.div>
          </div>
          <div className="image">
            <motion.img
            initial={{scale: 0, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{duration: 0.8}}
              src={ServiceImage}
              alt="Service Image"
              className="w-[400px] lg:w-[450px]"
            />
          </div>
          <motion.div
          initial={{x: 200, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.3}}
          className="yearsInfo">
            <h1 className="text-2xl font-bold text-secondColor">
              15 Years Of Experience In Auto Servicing
            </h1>
            <p className="mt-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="uls mt-5">
              <div className="flex items-center">
                <FaCheck className="text-[#198754]" />
                <h5 className="ms-3">Quality Servicing</h5>
              </div>
              <div className="flex items-center mt-4">
                <FaCheck className="text-[#198754]" />
                <h5 className="ms-3">Expert Workers</h5>
              </div>
              <div className="flex items-center mt-4">
                <FaCheck className="text-[#198754]" />
                <h5 className="ms-3">Modern Equipment</h5>
              </div>
            </div>
            <button className="mt-10 flex items-center bg-mainColor text-white px-8 py-6 font-bold uppercase">
              Read More
              <FaLongArrowAltRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
