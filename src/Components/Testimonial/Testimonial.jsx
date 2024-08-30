import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonailOne from "../../assets/testimonial-1.jpg";
import TestimonailTwo from "../../assets/testimonial-2.jpg";
import TestimonailThree from "../../assets/team-3.jpg";
import TestimonailFour from "../../assets/testimonial-4.jpg";
const Testimonial = () => {
  return (
    <section className="testimonials py-20 bg-white">
      <div className="container">
        <div className="info text-center">
          <h6 className="text-xl text-mainColor uppercase font-bold">
            // Testimonial //
          </h6>
          <h3 className="mt-5 text-2xl lg:text-4xl font-bold text-secondColor">
            Our Clients Say!
          </h3>
        </div>
        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailOne} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailTwo} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailThree} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailFour} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailOne} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailTwo} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailThree} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailFour} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img src={TestimonailOne} alt="TestimonailOne" />
                <h3 className="mt-2 font-bold text-secondColor">Client Name</h3>
                <h6>Profession</h6>
                <p className="bg-[#eee] text-sm p-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
