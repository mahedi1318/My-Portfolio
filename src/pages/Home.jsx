import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner_Part/Banner'
import Footer from '../components/Footer_Part/Footer'
import About from '../components/About_part/About'
import Skills from '../components/Skills_part/Skills'
import Portfolio from '../components/Portfolio_part/Portfolio'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default Home
