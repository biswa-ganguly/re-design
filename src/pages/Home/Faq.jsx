import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion";
import BookAMeetingV2 from "../../components/BookAMeetingV2";

function Faq() {
  const [rotation, setRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setRotation(180); 
      } else {
        setRotation(0); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const text = "agency";

  const splitLetters = text.split(" ").map((value, index) => (
    <span key={index} className="">
      {value}
    </span>
  ));

  return (
    <>
      {/* Desktop Section */}
      <div className="lg:block hidden h-[80vh] bg-[#6735EA]">
        <div className="flex flex-row justify-between p-3 lg:px-[7%]">
          <div className="flex justify-start items-start text-[#FECE02] font-archivo lg:text-[80px] text-[45px] lg:p-7 p-0 font-semibold">
            FAQs
          </div>

          <div className="flex flex-col items-center p-12">
            <div className="flex items-center -mb-8">
              <img
                src="Arrow.svg"
                alt="arrow"
                className="w-20 lg:w-36 fill-white -rotate-[160deg] mr-4"
              />
              <img
                src="/questionmark.svg"
                alt="questionmark"
                className="lg:w-20 lg:h-20 w-16 h-16 duration-300"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              />
            </div>

            <div className="text-white font-architects lg:text-[26px] text-[20px] mt-4 -ml-32">
              Nothing Special
            </div>
          </div>
        </div>
        <Accordion />
      </div>

      <div className="lg:block hidden">
        <div className="lg:h-[60vh] mt-10 mb-1">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <div className="w-full font-archivo text-[58px] leading-none p-10">
                At <strong>The Agenc-E</strong>, we don’t just work—we create,
                innovate, and deliver. Let’s make something amazing together.
              </div>
              <BookAMeetingV2 />
            </div>

            <img src="Frame48.svg" alt="frame" className="p-10 inline-block animate-swing" />
          </div>
        </div>
      </div>

      {/* Mobile Section */}


      <div className="lg:hidden block h-[80vh] bg-[#6735EA]">
        <div className="flex flex-row justify-between p-3">
          <div className="flex justify-start items-start text-[#FECE02] font-archivo lg:text-[80px] text-[45px] lg:p-7 pt-4 font-semibold">
            FAQs
          </div>
          <div className="flex items-center -mb-8">
            <img
              src="/questionmark.svg"
              alt="questionmark"
              className={`lg:w-20 lg:h-20 w-16 h-16 duration-300`}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          </div>
        </div>
        <div className="p-6">
          <Accordion />
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="flex flex-col items-center justify-center bg-white px-6 py-12">
          <img
            src="Frame48.svg"
            alt="frame"
            className="p-10 inline-block animate-swing"
          />
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-black">
              At The Agenc-E, we don’t just work—
            </h2>
            <p className="text-lg text-black">
              we create, innovate, and deliver. <br />
              Let’s make something{" "}
              <span className="italic text-purple-600">amazing</span> together.
            </p>
          </div>
          <button className="bg-[#6735EA] text-[#FECE02] font py-4 px-8 rounded-full transition duration-300">
            BOOK A MEETING
          </button>
        </div>
      </div>
    </>
  );
}

export default Faq;
