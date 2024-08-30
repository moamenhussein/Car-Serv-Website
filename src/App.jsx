import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/error/Error";
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    <>
    <ScrollToTop smooth />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
