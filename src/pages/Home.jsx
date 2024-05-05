import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner_Part/Banner'
import Footer from '../components/Footer_Part/Footer'
import About from '../components/About_part/About'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Footer/>
    </>
  )
}

export default Home
