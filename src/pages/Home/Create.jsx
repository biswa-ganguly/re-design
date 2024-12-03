import Separator from "../../components/Separator";

function Create() {
  const sections = [
    {
      title: "Social Media",
      description:
        "Social media is no longer optional–it’s where your brand gets seen, heard, and loved. And we’re here to turn up the volume.",
      features: [
        {
          heading: "Social Media Marketing",
          description:
            "Campaigns that convert, posts that pop, and strategies that make an impact.",
        },
        {
          heading: "Content Creation",
          description: "Not just content, but connections that matter.",
        },
        {
          heading: "Engagement & Optimization",
          description:
            "Watch your audience grow while your competitors wonder what just happened.",
        },
      ],
    },
    {
      title: "Website",
      description:
        "Your website is more than just a digital address—it’s your brand’s front door. Let’s make sure it’s irresistible.",
      features: [
        {
          heading: "Custom Website Design",
          description:
            "Fully responsive, user-friendly, and SEO-smart designs that stand out.",
        },
        {
          heading: "Professional Development",
          description:
            "Behind every great design is a robust backend. We make sure your site works as great as it looks.",
        },
      ],
    },
    {
      title: "Search Engine",
      description:
        "The internet’s a big place, but your audience shouldn’t have to dig to find you.",
      features: [
        {
          heading: "SEO Services",
          description:
            "Rise above the noise with strategies that boost your search engine rankings.",
        },
        {
          heading: "Local SEO",
          description:
            "Perfect for businesses looking to dominate their local markets.",
        },
        {
          heading: "SEM Expertise",
          description:
            "Targeted ads that put your brand right where it needs to be.",
        },
      ],
    },
    {
      title: "Campaigns",
      description:
        "Every campaign we craft tells a story—your story, authentically and impactfully.",
      features: [
        {
          heading: "Data-Driven Strategies",
          description: "Insights are at the core of every move we make.",
        },
        {
          heading: "Digital Marketing Campaigns",
          description:
            "From PPC to email, we ensure every dollar you spend delivers results.",
        },
        {
          heading: "Targeted Ad Campaigns",
          description: "Messaging that lands exactly where it counts.",
        },
      ],
    },
    {
      title: "Brand Identity",
      description:
        "A brand is more than just a logo—it’s your promise to the world. Let’s make it unforgettable.",
      features: [
        {
          heading: "Logo Design",
          description: "Simple, bold, and packed with meaning.",
        },
        {
          heading: "Full Branding Solutions",
          description:
            "From typography to tone of voice, we build brands that resonate.",
        },
        {
          heading: "Corporate Identity",
          description: "Cohesive branding across every touchpoint.",
        },
      ],
    },
  ];

  const text1 = "Creative";
  const text2 = "Fresh";
  const text3 = "Solutions";

  return (
    <div className="relative px-5 bg-black min-h-screen text-white pt-28 lg:pt-36">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 pointer-events-none"
        style={{
          backgroundImage: `url("/texture.webp")`,
        }}
      ></div>
      <div className="text-center flex flex-col gap-7">
        <div className="uppercase font-archivo flex flex-col md:flex-row gap-3 md:gap-7 justify-center items-center">
          <div className="flex gap-5 md:gap-8 lg:gap-10">
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
          <div className="flex text-4xl lg:text-7xl font-medium">
            {text3.split("").map((char, index) => (
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
          At The Agenc-E, we believe creativity isn’t something you can
          mass-produce. Every campaign, strategy, and design is crafted with
          precision and personality—just like your business.{" "}
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
            <p className="text-lg">{section.description}</p>

            <ul className="space-y-2 list-disc list-outside pl-6">
              {section.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <strong>{feature.heading}:</strong>{" "}
                  <span>{feature.description}</span>
                </li>
              ))}
            </ul>
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
