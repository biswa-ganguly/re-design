import React, {useRef} from 'react';
import {motion,useInView, useAnimation} from "framer-motion";
import CardForWhyUS from '../../components/CardForWhyUS';
// import Card from "../../components/Cards"
// import Page from "../../Page.js"



function WhyUs() {

  // cardVariants = {
  //   hidden: {opacity: 0, y:50}
  //   visible:{opacity:1, y:0}
  // }

  // const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // if (isInView) {
  //   controls.start("visible");
  // }

  return (
    <div className = "bg-black min-h-screen">

      <div className ="flex flex-row">
        <div       style = {{
        position: 'sticky',
        top: '20px', 
      }} className= "flex flex-col w-2/4 justify-center pl-14 h-[43rem]">
        <div className ="flex justify-start items-center font-archivo text-[#FECE02] text-[80px] font-medium">WHY US?</div>
        <div className= "flex font-inter font-normal text-[20px] text-white pb-36">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className = "flex flex-col w-full justify-around items-center gap-32 h-[256rem] " 
      >

       <CardForWhyUS/>

       {/* <Page/> */}

          
          
        </div>

      </div>
    </div>
  )
}

export default WhyUs