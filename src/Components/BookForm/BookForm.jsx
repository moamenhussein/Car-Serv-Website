import React from "react";
import { motion } from "framer-motion";
const BookForm = () => {
  return (
    <section className="bookForm bg-[#030a19] py-4">
      <div className="container mt-12 grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="info"
        >
          <h1 className="text-2xl lg:text-4xl font-bold text-white pt-16">
            Certified and Award Winning Car Repair Service Provider
          </h1>
          <p className="mt-8 text-white ">
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
            ipsum. Dolor ea et
            <br /> dolore et at sea ea at dolor, justo ipsum duo rebum sea
            invidunt voluptua. Eos vero
            <br /> eos vero ea et dolore eirmod et. Dolores diam duo invidunt
            lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et.
            Takimata takimata sanctus sed.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{duration: 0.9}}
          className="form bg-mainColor pt-16 px-10 mt-20 lg:mt-0 mb-10 pb-14"
        >
          <h1 className="text-center text-2xl lg:text-4xl font-bold text-white mt-5 lg:mt-0">
            Book For A Service
          </h1>
          <form action="" className="mt-5">
            <div className="block lg:flex gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full lg:w-[50%] py-5 ps-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-[100%] lg:w-[50%] py-5 ps-3 mt-5 lg:mt-0"
              />
            </div>
            <div className="block lg:flex gap-5 mt-5">
              <select name="" id="" className="w-[100%] lg:w-[50%] py-5 ps-3">
                <option>Select A Service</option>
                <option>Service 1</option>
                <option>Service 2</option>
                <option>Service 3</option>
              </select>
              <input
                type="date"
                className="w-[100%] lg:w-[50%] py-5 ps-3 mt-5 lg:mt-0"
              />
            </div>
            <input
              type="text"
              placeholder="Special Request"
              className="w-full mt-5 py-5 ps-3"
            />
            <button className="text-white mt-5 w-full bg-secondColor py-5 uppercase font-bold">
              Book Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookForm;
