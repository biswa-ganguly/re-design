import React from 'react';
import {motion,useAnimation} from "framer-motion"

function BookAMeetingV2() {

    const controls = useAnimation();
  return (
    <div className ="flex flex-row gap-8">
    <motion.button
    whileHover ="hover"
    whileTap = "hover"
    initial = "rest"
    animate = "rest"
    className = "lg:h-[120px] lg:w-[325px] h-[90px] w-[245px]  bg-[#6735EA] rounded-full lg:ml-20 ml-5 relative overflow-hidden"
    onHoverStart={() => controls.start("hover")}
    onHoverEnd={() => controls.start("rest")} 
    > <motion.div 
    className ="text-[35px] font-archivo font-medium text-[#FECE02] h-56 flex items-center justify-center w-full pb-24 leading-none"
    whileHover = "hover"
    initial = "rest"
    animate = "rest"
    variants={{
        rest: {y: '0%',originY:0}, 
        hover: {y: '-100%',originY:1 }, 
      }}
      transition={{
        duration: 0.3,
        ease: [1.25, 1, 1, 1],
      }}

    
    >Book A Meeting</motion.div> 

      <motion.div
              className="absolute inset-0 rounded-lg font-archivo font-medium"
              variants={{
                rest: { scale: 0, y: '100%',scaleX:0.5,scaleY:3 }, 
                hover: { scale: 2, y: '10%',scaleX:1,scaleY:1 }, 
              }}
              transition={{
                duration: 0.4,
                ease: [1.25, 1, 1, 1],
              }}
            style={{
                backgroundColor: '#FECE02', 
                borderRadius: '1000%', 
                originY:0.25
              }}
              
              > 
                    <motion.span
        className="absolute inset-0 flex justify-center items-center text-[#6735EA] lg:text-[16px] text-[12px] font-archivo font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate="rest"
        whileHover="hover"
         whileTap = "hover"
        variants={{
          rest: { opacity: 0, y: 10 }, 
          hover: { opacity: 1, y: -20 }, 
        }}
        transition={{
          ease: 'easeInOut',
          x: { stiffness:800, damping: 100}
        }}
      >
        <img src="Arrow 1.svg" alt="arrow" className="rotate-90 h-4" />
      </motion.span>
      </motion.div>


    </motion.button>

    <motion.div 
    className =" lg:hidden flex p-4 text-center leading-5 justify-center items-center lg:text-[35px] text-[20px] text-[#6735EA] font-archivo font-medium -z-40 whitespace-nowrap"
    whileHover= "hover"
    // animate = "rest"
     whileTap = "hover"
    initial = {{opacity:1}}
    variants ={{
        rest: {opacity:1,x:0},
        hover:{opacity:1,x: -250,stiffness:200,damping:100}
    }}
    tansition= {{
        duration: 0.8, 
          ease: 'easeIn',
        }}
    animate={controls}
    
    >
        <img src="/Arrow 1.svg" alt="arrow" className ="lg:hidden block h-10 w-10" />
      Book <br /> A <br />meeting
    </motion.div>
    </div>
    
    
    
    
  )
}

export default BookAMeetingV2