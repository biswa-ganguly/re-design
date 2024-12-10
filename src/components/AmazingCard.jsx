import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AmazingCard = ({ title, description, tags, image }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileAnimation = {
    normal: { rotate: 0, scale: 1 },
    animated: { rotate: 2, scale: 0.95 },
  };

  const pcAnimation = {
    normal: { scale: 1 },
    hover: { scale: 0.95, rotate: 2 },
  };

  return (
    <div className="md:w-[550px] md:h-[570px] lg:w-[620px] lg:h-[610px] w-[360px] h-[600px] rounded-[32px] border-[4px] border-[#6735EA] flex flex-col gap-5 py-4 px-5 items-center justify-around pb-10">
      <div className="rounded-[16px] transform transition-transform duration-100">
        <motion.img
          src={image}
          alt={title}
          className="md:w-[520px] md:h-[270px] lg:w-[588px] lg:h-[320px] w-[350px] h-[200px] rounded-[16px]"
          initial="normal"
          whileInView={isMobile ? "animated" : "normal"}
          whileHover={!isMobile ? "hover" : "normal"}
          viewport={{ once: false, amount: 0.85, margin: "200px 0px" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={isMobile ? mobileAnimation : pcAnimation}
        />
      </div>

      <div className="flex gap-3 w-full flex-wrap">
        {tags?.map((tag, index) => (
          <p
            key={index}
            className="w-fit rounded-[16px] bg-[#FECE02] py-[6px] px-[12px] font-medium"
          >
            {tag}
          </p>
          
        ))}
      </div>
      <div className="px-2">
        <h1 className="font-archivo md:text-[32px] text-[24px]">{title}</h1>
        <p className="font-inter text-[16px] font-normal leading-[160%] text-[#0d0d0d99]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AmazingCard;
