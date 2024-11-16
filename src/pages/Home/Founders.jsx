function Founders() {
  const founders = [
    {
      name: "Sourodeep Ghosh",
      designation: "Chief Executive Officer",
      description:
        "My vision is as straightforward as it gets-to develop home run strategies and our team of data- crunching maniacs will make it happen. We're here to tell you that there is no such rulebook to success, and there exists more than one way to win. As far as what I perceive the brand to be, we're like a kaleidoscope of talent and creativity. We bring a clean slate entwined with a passionate approach to everything we do. We're here to build with you and that is what makes the difference.",
      image: "/ceo.png",
    },
    {
      name: "Hreed Gupta",
      designation: "Chief Operating Officer",
      description:
        "My unorthodox self believes in the adage 'the most absurd of things click' and the ones called mad ideas are often the source of marketing success stories. I see The Agenc-E as a one-stop shop for businesses trying to establish a brand because a firm may exist but a brand needs to be developed. While every brand here aims for the spotlight, making flashy moves in the hopes to go viral, The Agenc-E isn't here vying for the mic, we want to be behind the scenes and see the real stars- our clients- win big.",
      image: "/assets/coo.png",
    },
  ];
  return (
    <div className="flex flex-col sm:gap-14 items-center lg:flex-row justify-around my-20 px-10 relative">
      <div>
        <img
          src="/ceo.png"
          alt="Sourodeep Ghosh"
          className="hover:scale-95 transition-all duration-300"
        />
        <h1 className="text-xl font-semibold">Sourodeep Ghosh</h1>
        <p className="font-light">Chief Executive Officer</p>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative">
          <div className="bg-[#6735EA] size-[450px] rounded-full flex flex-col py-[100px] items-center gap-10 px-20 text-center text-white z-10 absolute opacity-80">
            <h1 className="text-5xl font-medium font-archivo ">
              Meet our <br />
              Founders
            </h1>
            <p className="font-inter font-light">
              From humble beginnings to global impact, our founders vision and
              determination have shaped the trajectory of our company.
            </p>
          </div>
          <div className="bg-[#A785FF] size-[450px] rounded-full z-0 -translate-x-4 -translate-y-4"></div>
        </div>
      </div>

      <div>
        <img
          src="/coo.png"
          alt="Hreed Gupta"
          className="hover:scale-95 transition-all duration-300"
        />
        <h1 className="text-xl font-semibold">Hreed Gupta</h1>
        <p className="font-light">Chief Operating Officer</p>
      </div>
    </div>
  );
}

export default Founders;
