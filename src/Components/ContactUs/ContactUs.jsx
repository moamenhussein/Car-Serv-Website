import React from "react";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <section className="contact py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="info text-center">
          <h3 className="font-bold text-mainColor uppercase">
            // Contact Us //
          </h3>
          <h2 className="mt-5 text-2xl lg:text-4xl font-bold text-secondColor">
            Contact For Any Query
          </h2>
        </div>
        <div className="boxs mt-10 grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[#eee] p-6 hover:bg-white hover:shadow-2xl"
          >
            <h3 className="uppercase text-secondColor text-xl font-bold">
              // Booking //
            </h3>
            <h2 className="flex items-center">
              <IoMail className="text-mainColor text-xl" />
              <span className="ms-2">book@example.com</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#eee] p-6 hover:bg-white hover:shadow-2xl"
          >
            <h3 className="uppercase text-secondColor text-xl font-bold">
              // General //
            </h3>
            <h2 className="flex items-center">
              <IoMail className="text-mainColor text-xl" />
              <span className="ms-2">info@example.com</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-[#eee] p-6 hover:bg-white hover:shadow-2xl"
          >
            <h3 className="uppercase text-secondColor text-xl font-bold">
              // Technical //
            </h3>
            <h2 className="flex items-center">
              <IoMail className="text-mainColor text-xl" />
              <span className="ms-2">tech@example.com</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
