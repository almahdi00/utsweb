import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeaturesSection'
import Testimonials from './components/Testimonial'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page