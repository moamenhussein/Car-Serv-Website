import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Banner = (props) => {
  return (
    <section className="overflow-hidden">
      <div className="py-20 relative z-20 text-white text-center">
        <motion.h3
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{duration: 0.8}}
          className="text-3xl lg:text-5xl font-bold mt-6 lg:mt-0"
        >
          {props.heading}
        </motion.h3>
        <div className="mt-3">
          <Link to="/" className="uppercase font-bold text-mainColor text-xl">
            Home
          </Link>
          <span className="text-xl"> / {props.span}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
