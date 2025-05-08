import Navbar3 from '@/components/Navbar3'
import About from '@/components/Testing/About'
import Hero from '@/components/Testing/Hero'
import Services from '@/components/Testing/Services'
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