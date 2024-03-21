import React from 'react'
import Layout from "../../components/Layout/Layout"
import HeroSection from '../../components/Sections/HeroSection'
import About from '../../components/Sections/About'
import Steps from '../../components/Sections/Steps'

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Steps />
      <About />
    </Layout>
  )
}

export default Home