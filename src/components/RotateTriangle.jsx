import React, { useState } from "react";
import { useInView, useIsMobile } from "../hooks";

function RotateTriangle() {
  const [ref, isInView] = useInView();
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  
  const isActive = isMobile ? isInView : hovered;

  return (
    <div
      ref={ref}
      className="relative w-[368px] h-[320px] transition-all duration-300 ease-in-out"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
    >
      <div
        className="absolute inset-0 bg-black transition-all duration-300"
        style={{
          clipPath: isActive
            ? "polygon(0% 0%, 100% 0%, 50% 100%)"
            : "polygon(50% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className={`transition-opacity duration-400 ${isActive ? "opacity-0" : "opacity-100"}`}>
          <p className="text-6xl font-bold text-white absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            100<span className="text-3xl">+</span>
          </p>
          <p className="text-xl text-white font-semibold absolute bottom-20 left-1/2 transform -translate-x-1/2">
            Package Perfect
          </p>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center -top-[30%] px-8 text-center transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-white text-xl px-2 leading-relaxed">
            Created 100+ Product Packaging <br /> Designs That Enhanced 
            <br />
            Brand Visibility and <br /> Captured Consumer <br /> Attention.  
          </p>
        </div>
      </div>
    </div>
  );
}

export default RotateTriangle;
