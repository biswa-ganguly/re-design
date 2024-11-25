import React from "react";
import Navbar from "../../components/Navbar";
import Separator from "../../components/Separator";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Create from "./Create";
import WhyUs from "./WhyUs";
import Founders from "./Founders";
import AmazingWorks from "./AmazingWorks";
import Faq from "./Faq";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="lg:mt-[10%] mt-[30%]">
        <Hero />
      </div>

      {/* Separator */}
      <Separator />

      {/* Main Sections */}
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Create />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="work">
        <Founders />
      </section>
      <section id="">
        <AmazingWorks />
      </section>
      <section id="">
        <Faq />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
