import React from "react";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ServicesSection/Hero";
import List from "@/components/ServicesSection/List";

export default function page() {
  return (
    <>
      <Navbar3 />
      <Hero />
      <List />
      <Footer />
    </>
  );
}
