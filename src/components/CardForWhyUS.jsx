import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CardForWhyUS() {
  const cardData = [
    {
      title: "Balance",
      description:
        "We strike the perfect harmony between creativity and results, delivering for our clients while keeping our team energized and inspired.",
      imageSrc: "/Whyus.svg",
      backgroundColor: "#fece02",
    },
    {
      title: "Strong",
      description:
        "Our strategies are built to last. When we craft a campaign, it’s designed for enduring success.",
      imageSrc: "/Whyus.svg",
      backgroundColor: "#A785FF",
    },
    {
      title: "Best",
      description:
        "Good isn’t good enough for us. We aim to be extraordinary in every project we undertake.",
      imageSrc: "/Whyus.svg",
      backgroundColor: "#fece02",
    },
    {
      title: "Anyth!ng",
      description:
        "Flexibility is at the heart of what we do. No matter your brand’s needs, we adapt and deliver.",
      imageSrc: "/Whyus.svg",
      backgroundColor: "#A785FF",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "top top",
        scrub: true,
        onEnter: () => {
          cardsRef.current.slice(0, index).forEach((prevCard, i) => {
            gsap.to(prevCard, {
              scale: 1 - (index - i) * 0.1,
              y: (index - i) * -40,
              duration: 1,
              ease: "power4.out",
            });
          });
        },
        onLeaveBack: () => {
          cardsRef.current.slice(0, index).forEach((prevCard) => {
            gsap.to(prevCard, {
              scale: 1,
              y: 0,
              duration: 1,
              ease: "power4.out",
            });
          });
        },
      });
    });
  }, []);

  return (
    <div>
      {cardData.map((card, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          style={{
            position: "sticky",
            top: "190px",
            backgroundColor: card.backgroundColor,
          }}
          className=" flex flex-col  lg:h-[360px] lg:w-[680px] md:w-[600px] md:h-[300px] h-[220px] w-[370px] lg:rounded-3xl md:rounded-3xl rounded-xl mb-10"
        >
          <div className="flex font-archivo text-white font-medium text-[40px] p-5 pl-10 lg:pt-12 md:pt-12 pt-2">
            {card.title}
          </div>
          <div className="flex font-inter text-white font-normal text-[18px] pl-10">
            {card.description}
          </div>
          <img
            src={card.imageSrc}
            alt="whyus"
            className="absolute lg:mt-44 md:mt-36 mt-32 overflow-hidden"
          />
        </div>
      ))}
    </div>
  );
}

export default CardForWhyUS;
