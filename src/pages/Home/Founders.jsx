import react,{useState} from "react";
import {motion} from "framer-motion"

function Founders() {

  const [hoveredFounder,setHoveredFounder] =useState(null)

  return (
   
    <div className=" flex flex-col sm:gap-14 items-center lg:flex-row justify-around my-20 px-10 relative">

        
              <div className = "flex flex-col"
              onMouseEnter = {() => setHoveredFounder(1)}
              onMouseLeave = {() => setHoveredFounder(null)}
              >
              <img
                src="/ceo.png"
                alt="Sourodeep Ghosh"
                className="hover:scale-95 transition-all duration-300 z-50"
              />
              <h1 className="text-[24px] font-semibold">Sourodeep Ghosh</h1>
              <p className="font-light font-inter">Chief Executive Officer</p>
              <motion.p 
                       animate = {
                        hoveredFounder ===1  ? {x:580,y:0, opacity:1} : {x:0, y:0 ,opacity:0}
                       }
                       transition = {{duration:0.3}}
              className = "absolute w-1/5 top-20 text-center left-24 z-40 font-inter text-white"

              > My vision is as straightforward as it gets-to develop home run strategies and our team of data- crunching maniacs will make it happen. We're here to tell you that there is no such rulebook to success, and there exists more than one way to win. As far as what I perceive the brand to be, we're like a kaleidoscope of talent and creativity. We bring a clean slate entwined with a passionate approach to everything we do. We're here to build with you and that is what makes the difference.
              </motion.p>
            </div>
      
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative">
                <div className=" bg-[#A785FF] lg:size-[450px] size-[350px] rounded-full absolute -z-20">
      
                </div>
                <div className="bg-[#6735EA] lg:size-[450px] size-[350px] gap-3 rounded-full -translate-x-4 -translate-y-4 flex flex-col text-white items-center justify-center opacity-80 -z-30">
                  <motion.div
                  className =" flex flex-col items-center justify-center"
                                    animate = {
                                      hoveredFounder ===1 | hoveredFounder===2 ? {x:0,y:-300, opacity:0} : {x:0, y:0 ,opacity:1}
                                     }
                                     transition = {{duration:0.3}}

                                    
                  >
                <h1 className="text-5xl font-medium font-archivo text-center leading-none ">
                    Meet our <br />
                    Founders
                  </h1>
                  <p 

                  className="font-inter font-light lg:w-2/3 text-center mt-3">
                    From humble beginnings to global impact, our founders vision and
                    determination have shaped the trajectory of our company.
                  </p>
                  </motion.div>
                </div>
              </div>
            </div>
      
            <div className = "flex flex-col"
                          onMouseEnter = {() => setHoveredFounder(2)}
                          onMouseLeave = {() => setHoveredFounder(null)}>
              <img
                src="/coo.png"
                alt="Hreed Gupta"
                className="hover:scale-95 transition-all duration-300 z-50"
              />
              <h1 className="text-[24px] font-semibold">Hreed Gupta</h1>
              <p className="font-light font-inter">Chief Operating Officer</p>
              <motion.p 
                                     animate = {
                                      hoveredFounder ===2  ? {x:-580,y:0, opacity:1} : {x:0, y:0 ,opacity:0}
                                     }
                                     transition = {{duration:0.3}}

                          
              className = "absolute w-1/5 top-20 text-center right-28 z-40 font-inter text-white"
              
              
              > My vision is as straightforward as it gets-to develop home run strategies and our team of data- crunching maniacs will make it happen. We're here to tell you that there is no such rulebook to success, and there exists more than one way to win. As far as what I perceive the brand to be, we're like a kaleidoscope of talent and creativity. We bring a clean slate entwined with a passionate approach to everything we do. We're here to build with you and that is what makes the difference.
              </motion.p>
      
            </div>
            

    

    </div>
  
  );
}

export default Founders;
