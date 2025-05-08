import React from "react";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/About/Hero";
import AboutCompany from "@/components/About/AboutCompany";
import Life from "@/components/About/Life";

export default function page() {
  return (
    <>
      <Navbar3 />
      <Hero/>
      <AboutCompany/>
      <Life/>
      <Footer />
    </>
  );
}
