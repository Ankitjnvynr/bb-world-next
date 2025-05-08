import Data from '@/components/Ecommerce/Data'
import Hero from '@/components/Ecommerce/Hero'
import Services from '@/components/Ecommerce/Services'
import Solutions from '@/components/Ecommerce/Solutions'
import Navbar3 from '@/components/Navbar3'
import Footer from '@/components/ui/Footer'
import React from 'react'

const page = () => {
  return (
      <>
      <Navbar3/>
      <Hero />
      <Data />
      <Services />
      <Solutions/>
      <Footer />
      </>
  )
}

export default page