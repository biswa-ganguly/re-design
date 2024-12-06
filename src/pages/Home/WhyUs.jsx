import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import CardForWhyUS from "../../components/CardForWhyUS";

function WhyUs() {
  return (
    <>
      <div className="bg-black">
        <div
          style={{
            postion: "sticky",
            top: "350px",
          }}
          className=" lg:hidden flex flex-col lg:w-2/4 w-full lg:justify-center lg:items-start items-center lg:pl-14 p-4"
        >
          <div className="flex justify-start items-center font-archivo text-[#FECE02] text-[80px] font-medium whitespace-nowrap">
            WHY US?
          </div>
          <div className="flex font-inter font-normal text-[20px] text-white  lg:text-start text-center">
            At The Agenc-E, we’re not just about making things look good; we’re
            about making them work. Our unique balance of creativity, strategy,
            and execution ensures that every project isn’t just completed—it’s
            celebrated.
          </div>
        </div>
      </div>

      <div className="bg-black h-2/4">
        <div className="flex lg:flex-row flex-col">
          <div
            style={{
              position: "sticky",
              top: "190px",
            }}
            className=" lg:block hidden flex flex-col lg:w-2/4 w-full lg:justify-center lg:items-start items-center lg:pl-14 p-4 lg:h-[43rem] md:h-[0rem] h-[0rem] "
          >
            <div className="flex justify-start items-center font-archivo text-[#FECE02] text-[80px] font-medium whitespace-nowrap">
              WHY US?
            </div>
            <div className="flex font-inter font-normal text-[20px] text-white pb-36 lg:text-start text-center">
              At The Agenc-E, we’re not just about making things look good;
              we’re about making them work. Our unique balance of creativity,
              strategy, and execution ensures that every project isn’t just
              completed—it’s celebrated.
            </div>
          </div>

          <div className="flex flex-col w-full justify-around items-center gap-32 lg:h-[140rem] md:h-[130rem] h-[80rem]  ">
            <CardForWhyUS />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
