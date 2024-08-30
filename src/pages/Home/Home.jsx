import React from 'react'
import Landing from '../../Components/Landing/Landing'
import Workers from '../../Components/Workers/Workers'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import BookForm from '../../Components/BookForm/BookForm'
import Technicians from '../../Components/Technicians/Technicians'
import Testimonial from '../../Components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Landing />
      <Workers />
      <About />
      <Services />
      <BookForm />
      <Technicians />
      <Testimonial />
    </div>
  )
}

export default Home
