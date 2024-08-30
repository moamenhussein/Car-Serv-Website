import React from "react";
import teamOne from "../../assets/team-1.jpg";
import teamTwo from "../../assets/team-2.jpg";
import teamThree from "../../assets/team-3.jpg";
import teamFour from "../../assets/team-4.jpg";
import { motion } from "framer-motion";
const Technicians = () => {
  return (
    <section className="technicians overflow-hidden py-10">
      <div className="container">
        <div className="info text-center py-16">
          <h4 className="text-mainColor uppercase font-bold">
            // Our Technicians //
          </h4>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5}}
            className="mt-3 text-2xl lg:text-4xl font-bold text-secondColor"
          >
            Our Expert Technicians
          </motion.h1>
        </div>
        <div className="techniciansInfo grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={teamOne} alt="Team One"/>
            <div className="">
              <h3 className="text-secondColor font-bold py-3 text-2xl">
                Full Name
              </h3>
              <h6 className="pb-5">Designation</h6>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={teamTwo} alt="Team Two" />
            <div>
              <h3 className="text-secondColor font-bold py-3 text-2xl">
                Full Name
              </h3>
              <h6 className="pb-5">Designation</h6>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={teamThree} alt="Team Three" />
            <div>
              <h3 className="text-secondColor font-bold py-3 text-2xl">
                Full Name
              </h3>
              <h6 className="pb-5">Designation</h6>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={teamFour} alt="Team Four" />
            <div>
              <h3 className="text-secondColor font-bold py-3 text-2xl">
                Full Name
              </h3>
              <h6 className="pb-5">Designation</h6>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technicians;
