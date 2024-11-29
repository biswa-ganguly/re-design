import AmazingCard from "../../components/AmazingCard";

const AmazingWorks = () => {
  const works = [
    {
      title: "Universal Distribution LLC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/universal.png",
    },
    {
      title: "Bangla Konnection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/bk.png",
    },
    {
      title: "Waaree Solar Americas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/waaree.png",
    },

    {
      title: "Gulf Sea Real Estates LLC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/gulf.png",
    },
    {
      title: "Fashionism",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/fashionism.png",
    },
    // {
    //   title: "Synergy Tea",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
    //   tags: ["Web Design", "Web Development"],
    //   image: "/mockups/",
    // },

    {
      title: "Samshiti",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/samshiti.png",
    },
    // {
    //   title: "The Learning Panda",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
    //   tags: ["Web Design", "Web Development"],
    //   image: "/mockups/",
    // },
    // {
    //   title: "Zumi",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
    //   tags: ["Branding", "Social Media"],
    //   image: "/mockups/",
    // },
    {
      title: "PCG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/pcg.png",
    },
    {
      title: "Shree Yash Destinations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/shreeYash.png",
    },
  ];
  return (
    <div className="flex flex-col gap-10 items-center justify-center my-10">
      <h1 className="text-[#6735EA] text-center font-archivo text-5xl lg:text-7xl font-medium px-2">
        Our Amazing Works
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {works.map((work, index) => (
          <div key={index} className="px-2">
            <AmazingCard
              title={work.title}
              description={work.description}
              tags={work.tags}
              image={work.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingWorks;
