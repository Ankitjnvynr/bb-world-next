import React from "react";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/ui/Footer";
import BlogSection from "@/components/BlogSection/BlogSection";
import ContactUs from "@/components/ui/ContactUs";

export default function page() {
  return (
    <>
      <Navbar3 />
      <BlogSection />
      <div className="pt-32 mb-36">
        <ContactUs />
      </div>
      
      <Footer />
    </>
  );
}
