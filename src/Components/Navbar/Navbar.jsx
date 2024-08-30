import React from "react";
import { IoCarSport } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const moblinks = () => {
    document.querySelector(".mobile-links").classList.toggle("hidden");
  };
  return (
    <section className="bg-white py-5 nav w-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container flex justify-between items-center"
      >
        <div className="logo">
          <Link to={"/"}>
            <h2 className="flex items-center text-3xl font-bold text-mainColor">
              <IoCarSport className="text-4xl" />
              <span className="ms-3">CarServ</span>
            </h2>
          </Link>
        </div>
        <div className="links">
          <ul className="hidden lg:flex items-center space-x-8 text-xl uppercase text-secondColor">
            <li className="hover:text-mainColor">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-mainColor">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-mainColor">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-mainColor">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-mainColor">
              <button className="flex items-center bg-mainColor px-4 py-5 text-white">
                <span>Get A Quote</span>
                <span>
                  <IoIosArrowRoundForward />
                </span>
              </button>
            </li>
          </ul>
          <div>
            <FaBars
              className="block lg:hidden text-3xl cursor-pointer"
              onClick={moblinks}
            />
            <ul className="flex flex-col hidden absolute left-0 space-y-8 mt-5 w-full mobile-links bg-red-50 uppercase text-secondColor font-bold pb-16">
              <li className="hover:text-mainColor container mt-5">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-mainColor container">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-mainColor container">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:text-mainColor container">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-mainColor container">
                <button className="flex items-center bg-mainColor px-4 py-5 text-white">
                  <span>Get A Quote</span>
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Navbar;
