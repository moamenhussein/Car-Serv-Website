import React from "react";
import contactFormImage from "../../assets/contactForm.png";
import { motion } from "framer-motion";
const ContactForm = () => {
  return (
    <section className="bg-white contact-form overflow-hidden">
      <div className="container py-20 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={contactFormImage}
            alt="contactFormImage"
            className="w-[200px] lg:w-[400px]"
          />
        </div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-[#0000008b] mt-10 lg:mt-0">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
          </p>
          <form action="">
            <div className="block lg:flex gap-7 mt-10">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full lg:w-[50%] py-5 ps-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full lg:w-[50%] py-5 ps-3 mt-3 lg:mt-0"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full mt-3 py-5 ps-3"
            />
            <textarea
              placeholder="Message"
              className="w-full mt-3 py-5 ps-3"
            ></textarea>
            <input
              type="submit"
              value="SEND MESSAGE"
              className="w-full mt-3 py-5 bg-mainColor text-white font-bold cursor-pointer"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
