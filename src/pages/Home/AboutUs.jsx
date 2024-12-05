import React from "react";
import FlipCard from "../../components/FlipCard";
import Circle from "../../components/Circle";
import RotateTriangle from "../../components/RotateTriangle";

function AboutUs() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <h2 className="text-4xl lg:text-3xl mx-[180px] text-purple-700 font-semibold mb-2  whitespace-nowrap">
        About Us
      </h2>
      <div className="w-screen text-center lg:flex lg:justify-center items-center gap-10 lg:gap-[20%] mx-[0%] px-3">
        <p className="text-xl lg:text-2xl max-w-4xl font-light italic ">
          <span className="font-semibold not-italic">
            Collaborate. Innovate. Succeed.{" "}
          </span>
          Picture us as your creative late-night squad–lights on, coffee
          brewing, ideas flowing, and, yes, memes flying. But here’s the thing:
          we don’t just brainstorm ideas that look cool; we deliver strategies
          and results that truly matter.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto justify-items-center">
        <div className="px-[10%]">
          <FlipCard />
        </div>
        <div>
          <Circle />
        </div>
        <div>
          <RotateTriangle />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
