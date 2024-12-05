import React, { useState } from "react";

function RotateTriangle() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[368px] h-[320px] transition-all duration-300 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 bg-black transition-all duration-300"
        style={{
          clipPath: hovered
            ? "polygon(0% 0%, 100% 0%, 50% 100%)"
            : "polygon(50% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          className={`transition-opacity duration-400 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-5xl font-bold text-white absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            80K<span className="text-3xl">+</span>
          </p>
          <p className="text-sm text-white font-semibold absolute bottom-24 left-1/2 transform -translate-x-1/2">
            Website Visitors
          </p>
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center -top-[30%] px-8 text-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-xl px-2 leading-relaxed">
            The websites we've built <br /> for our clients have <br />
            collectively attracted <br /> over 80,000 unique <br /> visitors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RotateTriangle;
