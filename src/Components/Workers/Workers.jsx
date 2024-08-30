import React from "react";
import { FaCertificate } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
const Workers = () => {
  const wokersObject = [
    {
      id: 1,
      icon: <FaCertificate />,
      heading: "Quality Servicing",
      paragraph: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
      btn: "Read More",
      delay: "0.2",
    },
    {
      id: 2,
      icon: <FaUsersGear />,
      heading: "Expert Workers",
      paragraph: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
      btn: "Read More",
      delay: "0.3",
    },
    {
      id: 3,
      icon: <FaTools />,
      heading: "Modern Equipment",
      paragraph: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
      btn: "Read More",
      delay: "0.4",
    },
  ];
  return (
    <section className="workers">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-12">
          {wokersObject.map((work) => (
            <motion.div
            key={work.id}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: work.delay}}
              className="flex items-center bg-[#eee] px-6 py-6"
            >
              <div>
                <h3 className=" text-4xl md:text-6xl text-mainColor">
                  {work.icon}
                </h3>
              </div>
              <div className="ms-6 mt-7">
                <h3 className="text-2xl font-bold text-secondColor">
                  {work.heading}
                </h3>
                <p className="mt-2 text-xl">{work.paragraph}</p>
                <button className="mt-2 font-bold text-secondColor">
                  {work.btn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workers;
