import { useState } from "react";

function Founders() {
  const founders = [
    {
      name: "Sourodeep Ghosh",
      designation: "Chief Executive Officer",
      description:
        "My vision is as straightforward as it gets-to develop home run strategies and our team of data-crunching maniacs will make it happen. We're here to tell you that there is no such rulebook to success, and there exists more than one way to win. As far as what I perceive the brand to be, we're like a kaleidoscope of talent and creativity. We bring a clean slate entwined with a passionate approach to everything we do. We're here to build with you and that is what makes the difference.",
      image: "/ceo.png",
    },
    {
      name: "Hreed Gupta",
      designation: "Chief Operating Officer",
      description:
        "My unorthodox self believes in the adage 'the most absurd of things click' and the ones called mad ideas are often the source of marketing success stories. I see The Agenc-E as a one-stop shop for businesses trying to establish a brand because a firm may exist but a brand needs to be developed. While every brand here aims for the spotlight, making flashy moves in the hopes to go viral, The Agenc-E isn't here vying for the mic, we want to be behind the scenes and see the real stars- our clients- win big.",
      image: "/coo.png",
    },
  ];

  const [currentFounder, setCurrentFounder] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around my-20 px-10 relative gap-10">

      <div
        onMouseEnter={() => setCurrentFounder(founders[0])}
        onMouseLeave={() => setCurrentFounder(null)}
        className="flex flex-col items-center text-center"
      >
        <img
          src={founders[0].image}
          alt={founders[0].name}
          className="hover:scale-95 transition-transform duration-300"
        />
        <h1 className="text-xl font-semibold mt-4">{founders[0].name}</h1>
        <p className="font-light">{founders[0].designation}</p>
      </div>

   
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative">
          <div className="bg-[#6735EA] w-[450px] h-[450px] rounded-full flex flex-col items-center justify-center gap-6 text-center text-white z-10 absolute opacity-80 overflow-hidden">
            <div className="relative h-full w-full">
              <div
                className={`absolute top-[30%] inset-0 transition-transform duration-500 ${
                  currentFounder ? "-translate-y-full" : "translate-y-0"
                }`}
              >
                <h1 className="text-5xl font-medium font-archivo">
                  Meet our <br />
                  Founders
                </h1>
                <p className="font-inter font-light px-8">
                  From humble beginnings to global impact, our founders' vision
                  and determination have shaped the trajectory of our company.
                </p>
              </div>
              <div
                className={`absolute top-[25%] inset-0 transition-transform duration-500 ${
                  currentFounder ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {currentFounder && (
                  <>
                    <p className="font-inter font-light px-8">
                      {currentFounder.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="bg-[#A785FF] w-[450px] h-[450px] rounded-full z-0 -translate-x-4 -translate-y-4"></div>
        </div>
      </div>

     
      <div
        onMouseEnter={() => setCurrentFounder(founders[1])}
        onMouseLeave={() => setCurrentFounder(null)}
        className="flex flex-col items-center text-center"
      >
        <img
          src={founders[1].image}
          alt={founders[1].name}
          className="hover:scale-95 transition-transform duration-300"
        />
        <h1 className="text-xl font-semibold mt-4">{founders[1].name}</h1>
        <p className="font-light">{founders[1].designation}</p>
      </div>
    </div>
  );
}

export default Founders;
