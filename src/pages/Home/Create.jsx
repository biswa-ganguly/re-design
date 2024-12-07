function Create() {
  const sections = [
    {
      title: "Social Media",
      description:
        "Social media isn’t optional—it’s where your brand gets seen, heard, and loved. With expert Social Media Marketing, we create campaigns that convert and posts that pop, ensuring your brand stays ahead of the curve. Our Content Creation doesn’t just engage; it builds meaningful connections that matter. And with our optimization strategies, your audience grows while competitors wonder what hit them.",
    },
    {
      title: "Website",
      description:
        "Your website is your brand’s front door, and we make it impossible to ignore. Through Custom Website Design, we deliver responsive, user-friendly, and SEO-smart solutions that captivate visitors. With Professional Development backing the design, your website functions seamlessly, delivering both form and function in perfect harmony.",
    },
    {
      title: "Search Engine",
      description:
        "In the vastness of the internet, we make sure your audience finds you first. Our SEO Services boost your rankings, ensuring your brand rises above the noise. For dominating your local market, our Local SEO hits the bullseye. And with SEM Expertise, we create targeted ads that put your brand exactly where it needs to be.",
    },
    {
      title: "Campaigns",
      description:
        "Every campaign we create is built to deliver results. With our Digital Marketing Campaigns, we craft compelling stories that resonate with your audience. Backed by data and insights, our strategies make every penny count. Through Targeted Ad Campaigns, we deliver messaging that hits all the right notes, exactly where it matters.",
    },
    {
      title: "Brand Identity",
      description:
        "Your brand isn’t just a logo—it’s your promise to the world, and we make that promise unforgettable. Our Logo Design combines simplicity, boldness, and meaning to leave a lasting impression. With Full Branding Solutions, we create a cohesive identity that includes typography, tone of voice, and more. And through Corporate Identity services, we ensure your brand is seamlessly represented across every touchpoint.",
    },
  ];

  const text1 = "Creative";
  const text2 = "Fresh";
  // const text3 = "Solutions";

  return (
    <div className="relative px-5 bg-black min-h-screen text-white pt-28 lg:pt-36">
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url("/texture.webp")`,
        }}
      ></div> */}
      <div className="text-center flex flex-col gap-7">
        <div className="uppercase text-[#FECE02] font-archivo flex flex-col md:flex-row gap-3 md:gap-7 justify-center items-center">
          <div className="flex gap-5 md:gap-8 lg:gap-10">
            <div className="flex text-4xl  lg:text-7xl font-medium">
              {text1.split("").map((char, index) => (
                <span
                  key={`part1-${index}`}
                  className="inline-block transition-transform transform hover:-translate-y-5 will-change-transform"
                >
                  {char}
                </span>
              ))}
            </div>

            <span className="text-4xl lg:text-7xl font-medium transition-transform transform hover:-translate-y-5 inline-block will-change-transform">
              &
            </span>
          </div>

          <div className="flex text-4xl lg:text-7xl font-medium">
            {text2.split("").map((char, index) => (
              <span
                key={`part2-${index}`}
                className="inline-block transition-transform transform hover:-translate-y-5 will-change-transform"
              >
                {char}
              </span>
            ))}
          </div>
          
        </div>

        <p className="text-lg text-gray-100 px-5 lg:px-24">
          At The Agenc-E, we believe creativity isn’t something you can
          mass-produce. Every campaign, strategy, and design is crafted with
          precision and personality—just like your business.{" "}
        </p>
      </div>
      <div className="grid gap-4 mx-auto lg:px10- grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col p-10 gap-5 text-gray-500 hover:text-white transition-colors duration-100"
          >
            <div className="flex lg:flex-col gap-2 items-center lg:items-baseline">
              <p className="text-2xl text-white font-semibold">0{index + 1}</p>
              <h1 className="uppercase text-white font-semibold text-xl">
                {section.title}
              </h1>
            </div>

            <p className="text-lg transition duration-200">{section.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <div className="border-[#b7b7b7] border-2 w-full"></div>
      </div>
    </div>
  );
}

export default Create;
