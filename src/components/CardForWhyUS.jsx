import React,{useEffect,useRef} from 'react';
import {motion,useTransform,useScroll} from "framer-motion";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function CardForWhyUS() {

  const cardData = [
    {
      title:"Balance",
      description: "Our motto is striving for that client-employee synergy that allows us to balance employee happiness with the clients' needs for quality results.",
      imageSrc: '/Whyus.svg',
      backgroundColor: "#fece02",
    },{
      title:"Strong",
      description: "Our motto is striving for that client-employee synergy that allows us to balance employee happiness with the clients' needs for quality results.",
      imageSrc: '/Whyus.svg',
      backgroundColor: "#A785FF",
    },{
      title:"Best",
      description: "Our motto is striving for that client-employee synergy that allows us to balance employee happiness with the clients' needs for quality results.",
      imageSrc: '/Whyus.svg',
      backgroundColor:"#fece02",
    },{
      title:"Anyth!ng",
      description: "Our motto is striving for that client-employee synergy that allows us to balance employee happiness with the clients' needs for quality results.",
      imageSrc: '/Whyus.svg',
      backgroundColor: "#A785FF",
    },
  ]

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
              scale: 1 - (index - i) * 0.10,         
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
      {cardData.map((card,i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          style={{ position: 'sticky', top: '100px',backgroundColor: card.backgroundColor }}
          className="flex flex-col h-[360px] w-[680px] rounded-3xl mb-10 scroll-smooth"
        >
          <div className="flex font-archivo text-white font-medium text-[40px] p-5 pl-10 pt-12">
            {card.title}
          </div>
          <div className="flex font-inter text-white font-normal text-[18px] pl-10">
            {card.description}
          </div>
          <img src={card.imageSrc} alt="whyus" className="absolute mt-44" />
        </div>
     )) }
    </div>
  )
}

export default CardForWhyUS