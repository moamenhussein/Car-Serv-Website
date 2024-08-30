import React from "react";
import Banner from "../../Components/Banner/Banner";
import ContactUs from "../../Components/ContactUs/ContactUs";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="bg-secondColor">
        <div className="container">
          <Banner heading="Contact" span="CONTACT" />
        </div>
      </section>
      <ContactUs />
      <ContactForm />
    </>
  );
};

export default Contact;
