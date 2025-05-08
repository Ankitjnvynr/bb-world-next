import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/ui/Footer";
import AboutData from "@/components/ui/AboutData";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import ContactUs from "@/components/ui/ContactUs";
import { FeaturesSectionDemo } from "@/components/ui/FeaturesSectionDemo";
import Hero1 from "@/components/ui/Hero1";
import { HoverEffect } from "@/components/ui/HoverEffect";
import HowWeWork from "@/components/ui/HowWeWork";
import { items } from "@/components/ui/items";
import { testimonials } from "@/components/ui/testimonials";
import VisitUs from "@/components/ui/VisitUs";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Navbar3/>
      <Hero1/>
      <FeaturesSectionDemo />
      <div className="flex justify-center items-center  mt-10 mb-10 rounded-2xl  xl:p-20 xs:p-3 md:p-5 s:p-6 lg:p-7 w-[100vw]">
          <BackgroundGradient
            animate={true}
            containerClassName="rounded-3xl shadow-xl w-[100%] max-w-full"
            className="bg-white text-black p-6 rounded-3xl "
          >
            <AboutData />
          </BackgroundGradient>
      </div>
      <HowWeWork />
              <HoverEffect items={items} className="" />
      <ContactUs />
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      <VisitUs />
        <Footer />
    </>
  );
}
