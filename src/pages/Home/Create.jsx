import Separator from "../../components/Separator";

function Create() {
  const sections = [
    {
      title: "Social Media",
      description:
        "Starting from your social media to your brand management, we design cutting-edge solutions to overcome your challenges and deliver quality results. ",
    },
    {
      title: "Website",
      description:
        "We create captivating digital experiences ensuring mobile-optimization, user-intent-aligned websites that drive conversions and fuel your business growth.",
    },
    {
      title: "Search Engine",
      description:
        "We conduct in-depth keyword research and implement effective content marketing to connect with your target audience and drive organic stuff.",
    },
    {
      title: "Campaign",
      description:
        "We are a passionate digital marketing agency specializing in brand storytelling and strategic execution. We craft compelling brand identities, optimize your digital presence, and drive results through effective social media and website strategies.",
    },
    {
      title: "Brand Identity",
      description:
        "We offer comprehensive digital marketing solutions, from long-tail keyword research to targeted advertising campaigns, to help you achieve your business goals. Our tailored strategies deliver quality results by attracting the right audience and creating seamless user experiences. ",
    },
  ];

  const text1 = "Creative";
  const text2 = "Fresh";

  return (
    <div className="relative px-5 bg-black min-h-screen text-white pt-28 lg:pt-36">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-t-[45%] opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url("/texture.webp")`,
        }}
      ></div>
      <div className="text-center flex flex-col gap-7">
        <div className="uppercase font-archivo flex gap-7 justify-center">
          <div className="flex text-4xl lg:text-7xl font-medium">
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

        <p className="text-sm text-gray-400">
          We offer comprehensive digital marketing solutions, tailored to your
          unique needs.{" "}
        </p>
      </div>
      <div className="grid gap-4 mx-auto px-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col p-10 gap-5 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <p className="text-2xl font-semibold">0{index + 1}</p>
            <h1 className="uppercase font-semibold text-xl">{section.title}</h1>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
    <div className='border-[#b7b7b7] border-2 w-full'></div>
    </div>
    </div>
  );
}

export default Create;
