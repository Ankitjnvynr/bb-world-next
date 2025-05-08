import About from '@/components/Digital/About'
import Hero from '@/components/Digital/Hero'
import Services from '@/components/Digital/Services'
import Navbar3 from '@/components/Navbar3'
import Footer from '@/components/ui/Footer'
import React from 'react'

const page = () => {
  return (
      <>
      <Navbar3/>
      <Hero/>
      <Services/>
      <About/>
      <Footer/>
      </>
  )
}

export default page