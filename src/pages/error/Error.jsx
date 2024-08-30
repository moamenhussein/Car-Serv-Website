import React from "react";
import Banner from "../../Components/Banner/Banner";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Error = () => {
  return (
    <div className="error overflow-hidden">
      <section className="bg-[#4c4c4c]">
        <div className="container">
          <Banner heading="Not Found" span="404" />
        </div>
      </section>
      <motion.section
      initial={{y: 300, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className="bg-white py-20 text-center">
        <FaExclamationTriangle className="text-6xl text-mainColor" />
        <h3 className="mt-4 text-secondColor text-6xl font-bold">404</h3>
        <h3 className="mt-4 text-5xl font-bold text-secondColor">
          Page Not Found
        </h3>
        <p className="mt-6">
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
        <Link
          to="/"
          className="errorbtn block mt-6 bg-mainColor text-white  font-bold"
        >
          Go back to home
        </Link>
      </motion.section>
    </div>
  );
};

export default Error;
