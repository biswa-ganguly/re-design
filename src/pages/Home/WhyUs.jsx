import React, {useRef} from 'react';
import {motion,useInView, useAnimation} from "framer-motion";
import CardForWhyUS from '../../components/CardForWhyUS';



function WhyUs() {


  return (
    <>    
    <div className = "h-64 bg-black">
    <div  
       style={{
        postion:'sticky',
        top:'350px'
       }}    
       className= " lg:hidden flex flex-col lg:w-2/4 w-full lg:justify-center lg:items-start items-center lg:pl-14 p-4">
      <div className ="flex justify-start items-center font-archivo text-[#FECE02] text-[80px] font-medium whitespace-nowrap">WHY US?</div>
      <div className= "flex font-inter font-normal text-[20px] text-white pb-36 lg:text-start text-center">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      </div>


    <div className = "bg-black min-h-screen">

      <div className ="flex lg:flex-row flex-col">
        <div       
        style = {{
        position: 'sticky',
        top: '190px', 
      }} className= " lg:block hidden flex flex-col lg:w-2/4 w-full lg:justify-center lg:items-start items-center lg:pl-14 p-4 lg:h-[43rem] md:h-[0rem] h-[0rem] ">
        <div className ="flex justify-start items-center font-archivo text-[#FECE02] text-[80px] font-medium whitespace-nowrap">WHY US?</div>
        <div className= "flex font-inter font-normal text-[20px] text-white pb-36 lg:text-start text-center">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className = "flex flex-col w-full justify-around items-center gap-32 lg:h-[256rem] md:h-[130rem] h-[120rem]  " 
      >

       <CardForWhyUS/>
          
          
        </div>

      </div>
    </div>
    </>

  )
}

export default WhyUs