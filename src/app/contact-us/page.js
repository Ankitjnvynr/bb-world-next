import React from "react";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/ui/Footer";
import ContactUs from "@/components/ui/ContactUs";

export default function page() {
  return (
    <>
      <Navbar3 />
      <div className="pt-32 mb-36">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
