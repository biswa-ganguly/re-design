import React from "react";
import { motion, useAnimation } from "framer-motion";

function BookAMeeting() {
  const controls = useAnimation();
  return (
    <div className="flex flex-row gap-8">
      <motion.button
        whileHover="hover"
        whileTap="hover"
        initial="rest"
        animate="rest"
        className="lg:h-[120px] lg:w-[325px] h-[90px] w-[245px]  bg-[#6735EA] rounded-full lg:ml-20 ml-5  relative overflow-hidden"
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("rest")}
      >
        <motion.div
          className="absolute inset-0 rounded-lg font-archivo font-medium"
          variants={{
            rest: { scale: 0, y: "100%", scaleX: 0.5, scaleY: 3 },
            hover: { scale: 2, y: "10%", scaleX: 1, scaleY: 1 },
          }}
          transition={{
            duration: 0.3,
            ease: [1.25, 1, 1, 1],
          }}
          style={{
            backgroundColor: "#FECE02",
            borderRadius: "1000%",
            originY: 0.25,
          }}
        >
          <motion.span
            className="absolute inset-0 flex justify-center items-center text-[#6735EA] lg:text-[16px] text-[12px] font-archivo font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate="rest"
            whileHover="hover"
            whileTap="hover"
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: -20 },
            }}
          >
            LET'S GROW !!
          </motion.span>
        </motion.div>
      </motion.button>
      <motion.div
        className=" lg:flex hidden  gap-3 justify-center items-center lg:text-[35px] text-[20px] text-[#6735EA] font-archivo font-medium -z-40 whitespace-nowrap"
        whileHover="hover"
        // animate = "rest"
        whileTap="hover"
        initial={{ opacity: 1 }}
        variants={{
          rest: { opacity: 1, x: 0 },
          hover: { opacity: 1, x: -350, stiffness: 200, damping: 100 },
        }}
        tansition={{
          duration: 0.8, // Slower transition for the text animation
          ease: "easeIn",
        }}
        animate={controls}
      >
        <img
          src="/Arrow 1.svg"
          alt="arrow"
          className="lg:block hidden h-10 w-10"
        />
        Book A meeting
      </motion.div>
      <motion.div
        className=" lg:hidden flex p-4 text-center leading-5 justify-center items-center lg:text-[35px] text-[20px] text-[#6735EA] font-archivo font-medium -z-40 whitespace-nowrap"
        whileHover="hover"
        // animate = "rest"
        whileTap="hover"
        initial={{ opacity: 1 }}
        variants={{
          rest: { opacity: 1, x: 0 },
          hover: { opacity: 1, x: -250, stiffness: 200, damping: 100 },
        }}
        tansition={{
          duration: 0.8, // Slower transition for the text animation
          ease: "easeIn",
        }}
        animate={controls}
      >
        <img
          src="/Arrow 1.svg"
          alt="arrow"
          className="lg:hidden block h-10 w-10"
        />
        Book <br /> A <br />
        meeting
      </motion.div>
    </div>
  );
}

export default BookAMeeting;
