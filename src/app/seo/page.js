import Navbar3 from '@/components/Navbar3'
import Data from '@/components/Seo/Data'
import Hero from '@/components/Seo/Hero'
import Services from '@/components/Seo/Services'
import ServicesOffer from '@/components/Seo/SevicesOffer'
import Footer from '@/components/ui/Footer'
import React from 'react'

const page = () => {
  return (
      <>
       <Navbar3/>
      <Hero/>
      <Data/>
      <Services/>
      <ServicesOffer/>
      <Footer/>
      </>
  )
}

export default page