import React from "react";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services"
import BookForm from "../../Components/BookForm/BookForm"
import Testimonials from "../../Components/Testimonial/Testimonial"
const ServicesPage = () => {
  return (
    <>
      <section className="bg-[#000000b8]">
        <div className="container">
          <Banner heading="Services" span="Services" />
        </div>
      </section>
      <Services />
      <BookForm />
      <Testimonials />
    </>
  );
};

export default ServicesPage;
