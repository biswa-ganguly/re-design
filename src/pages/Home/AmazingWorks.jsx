import AmazingCard from "../../components/AmazingCard";
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const AmazingWorks = () => {
  const CustomPrevArrow = (onClickHandler) => (
    <button
      type="button"
      onClick={onClickHandler}
      className="absolute left-5 top-[20%] transform -translate-y-1/2 bg-tranparent rounded-full px-2   z-10"
    >
      <FaChevronLeft className="text-xl text-[#6735EA]" />
    </button>
  );

  const CustomNextArrow = (onClickHandler) => (
    <button
      type="button"
      onClick={onClickHandler}
      className="absolute right-5 top-[20%] transform -translate-y-1/2 bg-tranparent rounded-full px-2  z-10"
    >
      <FaChevronRight className="text-xl text-[#6735EA]" />
    </button>
  );
  const works = [
    {
      title: "Universal Distribution LLC",
      description:
        "Revamped their online presence with a sleek, SEO-optimized site and fresh packaging for 32 SKUs, streamlining their supply chain operations and amplifying their global reach.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/universal.png",
    },
    {
      title: "Waaree Solar Americas",
      description:
        "For this Texas-based solar leader, we developed a cutting-edge website with seamless geo-redirects, creating an intuitive and clutter-free user experience that mirrored their sun-powered solutions.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/waaree.png",
    },
    {
      title: "Bangla Konnection",
      description:
        "Migrated over 20,000 users, redesigned the UI/UX, and executed performance campaigns that brought the soul of Bengal to a thriving global audience.",
      tags: [
        "Web Design",
        "Web Development",
        "Social Media Management",
        "Content Creation",
      ],
      image: "/mockups/bk.png",
    },
    {
      title: "Gulf Estates",
      description:
        "Reimagined luxury real estate in Dubai by designing a sleek web app, launching high-impact social campaigns, and generating quality leads that transformed their business landscape.",
      tags: [
        "Web Design",
        "Web Development",
        "Social Media Management",
        "Content Creation",
      ],
      image: "/mockups/gulf.png",
    },
    {
      title: "Fashionism",
      description:
        "Crafted a couture-inspired website, added stylish in-store media, and produced sleek videos that elevated their bold, black-themed brand identity to new heights.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/fashionism.png",
    },
    {
      title: "Synergy Tea",
      description:
        "Brewed an engaging, mood-based website featuring an interactive Mood-o-Metre, driving sales within three weeks and aligning their blends with customers’ preferences seamlessly.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/synergyTea.png",
    },
    {
      title: "Samshiti",
      description:
        "Transformed their site with enhanced navigation, modern design, and captivating event invites, ensuring visitors stayed longer and shopped more effortlessly.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/samshiti.png",
    },
    {
      title: "Shree Yash Destinations",
      description:
        "Enhanced their travel site to deliver elevated user experiences, turning every click into a step closer to unforgettable adventures for travelers worldwide.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/shreeYash.png",
    },
    {
      title: "The Learning Panda",
      description:
        "Built an innovative platform combining data science learning, networking, and fun, giving enthusiasts a dynamic Silicon Valley-inspired online community to thrive in.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/learningPanda.png",
    },
    {
      title: "PCG",
      description:
        "Created a dynamic, India-focused website that bridged Thailand’s experiences with local flair, offering seamless navigation and culturally resonant storytelling for their audience.",
      tags: ["Web Design", "Web Development"],
      image: "/mockups/pcg.png",
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-center justify-center my-10">
      <h1 className="text-[#6735EA] text-center font-archivo text-5xl lg:text-7xl font-medium px-2">
        Our Amazing Works
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
        {works.map((work, index) => (
          <div key={index} className="px-2 hidden md:inline-block">
            <AmazingCard
              title={work.title}
              description={work.description}
              tags={work.tags}
              image={work.image}
            />
          </div>
        ))}
      </div>

      <div className="w-full md:hidden flex justify-center items-center">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={2500}
        stopOnHover={true}
        className="w-full h-full"
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && CustomPrevArrow(onClickHandler)
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && CustomNextArrow(onClickHandler)
        }
      >
        {works.map((work, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
          >
            <AmazingCard
              title={work.title}
              description={work.description}
              tags={work.tags}
              image={work.image}
            />
          </div>
        ))}
      </Carousel>
    </div>

    </div>
  );
};

export default AmazingWorks;
