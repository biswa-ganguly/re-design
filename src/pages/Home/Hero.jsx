import React, { useState, useEffect } from "react";
import ToggleButton from "../../components/ToggleButton";
import { motion } from "framer-motion";
import ImageSlider from "../../components/ImageSlider";
import BookAMeeting from "../../components/BookAMeeting";

function Hero() {
  return (
    <section className="">
      <img
        src="/Highlight.png"
        alt="Heroimage"
        className="absolute top-0 right-0 w-full -z-50"
      />

      <div className="flex flex-col font-semibold justify-start items-center lg:min-h-screen h-[30vh] w-ful relative lg:-mt-6 md:mt-12  mt-24">
        <div className=" flex lg:h-[200px] lg:w-[56rem] md:h-[100px] md:w-[41rem] h-[50px] w-[23rem]  justify-evenly items-center">
          <div className=" lg:w-[280px] lg:h-[100px] md:w-[180px] md:h-[60px] w-[110px] h-[40px] rounded-full inline-block overflow-hidden">
            <ImageSlider />
          </div>

          <p className=" text-black lg:text-[120px] md:text-[80px] text-[50px] font-archivo font-normal whitespace-nowrap">
            WE MAKE
          </p>
        </div>

        <div className=" flex lg:h-[200px] lg:w-[58rem] md:h-[100px] md:w-[41rem] h-[50px] w-[23rem] justify-evenly items-center lg:-mt-20 md:-mt-5">
          <img src="/Star.svg" alt="star" className="lg:h-24 md:h-16 h-12" />

          <p className=" text-[#6735EA] lg:text-[120px] md:text-[80px] text-[50px] font-archivo font-medium">
            WEBSITES
          </p>
          <p className=" text-black lg:text-[120px] md:text-[80px] text-[50px] font-archivo font-medium">
            &
          </p>
        </div>

        <div className=" flex-row flex lg:h-[200px] lg:w-[66rem] md:h-[100px] md:w-[40rem] h-[50px] w-[25rem] justify-center items-center lg:gap-5 gap-2 lg:-mt-20 lg:ml-[11rem] md:-mt-5">
          <p className="  lg:text-[120px] md:text-[80px] text-[50px] font-archivo text-[#6735EA] font-medium">
            BRANDS
          </p>
          <img src="/Union.svg" alt="star" className="lg:h-24 md:h-16 h-12" />

          {/* <button className="lg:h-[100px] lg:w-[300px] md:h-[60px] md:w-[150px] w-[100px] h-[40px] bg-[#6735EA] rounded-full"></button> */}
          <ToggleButton />
          <div className="hidden flex-col mb-16 space-y-0 -mt-10  lg:flex">
            <div className="font-architects text-2xl font-light whitespace-nowrap">
              Just a button
            </div>
            <img
              src="/Arrow.svg"
              alt="Arrow"
              className="mb-5 lg:w-24 lg:h-24 md:w-16 md:h-16"
            />
          </div>
        </div>

        <div className=" flex lg:h-[200px] lg:w-[56rem] md:h-[100px] md:w-[45rem] h-[50px] w-[22rem] items-center lg:-mt-20 md:-mt-5 lg:mr-0 mr-7">
          <motion.img
            src="/Frame.svg"
            alt="star"
            className="lg:h-32 md:h-20 h-14"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{
              duration: 5,
              ease: [0.5, 0.05, 0, 1],
              repeat: Infinity,
            }}
          />
          <p className="lg:text-[120px] md:text-[80px] text-[50px] font-archivo font-medium whitespace-nowrap">
            STAND OUT
          </p>
          {/* <div className="flex flex-col mt-8 items-end justify-end md:block lg:hidden font-architects font-light whitespace-nowrap w-11 lg:-mt-10 gap-0">
            <img
              src="/Arrow.svg"
              alt="Arrow"
              className=" flex md:block lg:hidden mb-2 md:w-12 md:h-12 -rotate-[40deg]"
            />
            Just a button
          </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full justify-start items-start">
        <div className="flex lg:w-2/4 w-full lg:p-0 p-5 font-inter lg:text-[26px] text-[20px] lg:ml-20 font-medium ">
          If you’ve landed here expecting just another agency pitch, you’re in
          for a surprise. Welcome to The Agenc-E, where rules are bent, boxes
          are broken, and ideas come alive. Born in Kolkata, we’re the perfect
          match for dreamers, misfits, and visionaries who dare to think
          differently!
        </div>
        <div className="lg:block hidden">
        <BookAMeeting />
        </div>
        <div className="lg:hidden flex items-center justify-center w-full">
  <button className="bg-[#6735EA] text-[#FECE02] font py-4 px-8 rounded-full transition duration-300">
    BOOK A MEETING
  </button>
</div>
      </div>
    </section>
  );
}

export default Hero;
