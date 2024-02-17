import React from 'react'
import Layout from "../components/Layout/Layout"
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Steps from '../components/Steps'

const Home = () => {
  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Steps/>
    </Layout>
  )
}

export default Home