import Navbar3 from '@/components/Navbar3'
import Footer from '@/components/ui/Footer'
import About from '@/components/Web-Development/About'
import Features1 from '@/components/Web-Development/Features1'
import Hero from '@/components/Web-Development/Hero'
import Services from '@/components/Web-Development/Services'
import Technologies from '@/components/Web-Development/Technologies'
import React from 'react'

const page = () => {
  return (
      <>
      <Navbar3/>
      <Hero/>
      {/* <Features/> */}
      <Features1/>
      <Technologies/>
      <Services/>
      <About/>
      <Footer/>
      </>
  )
}

export default page