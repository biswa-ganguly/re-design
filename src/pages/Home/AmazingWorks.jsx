import AmazingCard from "../../components/AmazingCard";

const AmazingWorks = () => {
  const works = [
    {
      title: "Waaree Solar Americas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "Universal Distribution LLC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "Gulf Sea Real Estates LLC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "Bangla Konnection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "Synergy Tea",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "Fashionisn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "Samshiti",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "The Learning Panda",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "Zumi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Branding", "Social Media"],
    },
    {
      title: "Shree Yash Destinations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "PCG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat",
      tags: ["Web Design", "Web Development"],
    },
  ];
  return (
    <div className="flex flex-col gap-10 items-center justify-center my-10">
      <h1 className="text-[#6735EA] text-center font-archivo text-5xl lg:text-7xl font-medium">
        Our Amazing Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {works.map((work, index) => (
          <div key={index} className="px-2">
            <AmazingCard
              title={work.title}
              description={work.description}
              tags={work.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingWorks;
