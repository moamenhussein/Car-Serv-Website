import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <section className="footer py-20 bg-secondColor text-white overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold py-2">Address</h2>
            <div className="flex items-center mt-4">
              <FaLocationDot className="text-xl" />
              <h4 className="ms-4">Tanta, Cairo</h4>
            </div>
            <div className="flex items-center mt-4">
              <FaPhoneAlt className="text-xl" />
              <h4 className="ms-4">01024327924</h4>
            </div>
            <div className="flex items-center mt-4">
              <IoMail className="text-xl" />
              <h4 className="ms-4">moamenhussein2424@gmail.com</h4>
            </div>
            <ul className="flex items-center mt-5 text-2xl">
              <li>
                <a href="https://www.facebook.com/moalfj?mibextid=ZbWKwL">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://github.com/moamenhussein">
                  <FaGithub className="ms-4" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moamen-hussein-414ab1254/">
                  <FaLinkedin className="ms-4" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/moamenhussein1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                  <FaInstagram className="ms-4" />
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold py-2">Opening Hours</h2>
            <div className="mt-5">
              <p className="font-bold">Monday - Friday:</p>
              <p className="mt-3">09.00 AM - 09.00 PM</p>
            </div>
            <div className="mt-5">
              <p className="font-bold">Saturday - Sunday:</p>
              <p className="mt-3">09.00 AM - 12.00 PM</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold py-2">Services</h2>
            <ul>
              <li className="mt-3">
                <a href="#">Diagnostic Test</a>
              </li>
              <li className="mt-3">
                <a href="#">Engine Servicing</a>
              </li>
              <li className="mt-3">
                <a href="#">Tires Replacement</a>
              </li>
              <li className="mt-3">
                <a href="#">Oil Changing</a>
              </li>
              <li className="mt-3">
                <a href="#">Vacuam Cleaning</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold py-2">Newsletter</h2>
            <p className="mt-3 text-xl">
              Dolor amet sit justo amet elitr clita
              <br /> ipsum elitr est.
            </p>
            <form action="" className="mt-5">
              <input
                type="email"
                placeholder="Your Email"
                className="py-5 ps-2 email"
              />
              <input
                type="submit"
                value="SIGNUP"
                className="bg-mainColor py-5 px-3 cursor-pointer mt-3 xl:mt-0"
              />
            </form>
          </motion.div>
        </div>
      </section>
        <section className="footer-two bg-secondColor">
          <div className="container">
            <div className="py-5 text-white text-center text-xl font-bold">
              &copy; 2024 All Rights Reserved, Designed By <span className="text-mainColor">ENG/Moamen Hussein</span>
            </div>
          </div>
        </section>
    </>
  );
};

export default Footer;
