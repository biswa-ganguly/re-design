import React from 'react';

function Hero() {
  return (
    <section>
      <img src= "/Highlight.png" alt = "Heroimage" className = "absolute top-0 right-0 w-full -z-50" />

      <div className="flex flex-col font-semibold justify-start items-center min-h-screen w-ful relative lg:-mt-6 md:mt-5">
        
        <div className="flex lg:h-[200px] lg:w-[68rem] md:h-[100px] md:w-[45rem] h-[50px] w-[25rem]  justify-evenly items-center">
        <div className =" lg:w-[350px] lg:h-[120px] md:w-[300px] md:h-[100px] w-[125px] h-[50px]  bg-black rounded-full inline-block"/>

        <p className=" text-black lg:text-[150px] md:text-[100px] text-[50px] font-archivo font-normal whitespace-nowrap">
            We Make</p>
        </div>



        <div className=" flex lg:h-[200px] lg:w-[68rem] md:h-[100px] md:w-[45rem] h-[50px] w-[25rem] justify-evenly items-center lg:-mt-14 md:mt-2">
        <img src= "/Star.svg" alt ="star" className= "lg:h-32 md:h-24 h-14" />

        <p className=" text-[#6735EA] lg:text-[150px] md:text-[100px] text-[50px] font-archivo gap-0 font-normal">
            Websites &</p>
        </div>



        <div className=" flex lg:h-[200px] lg:w-[68rem] md:h-[100px] md:w-[45rem] h-[50px] w-[25rem] justify-evenly items-center lg:-mt-14 md:mt-2">

          <div className = "absolute font-architects text-2xl right-3 font-light mb-28 transform -translate-x-1/2">Just a button</div>
           <img src = "/Arrow.svg" alt ="Arrow" className ="absolute right-28 mb-5 transform -translate-x-1/2"/>
        <p className="  lg:text-[150px] md:text-[100px] text-[50px] font-archivo text-[#6735EA] font-normal">
            Brands</p>
            <img src= "/Union.svg" alt ="star" className= "lg:h-32 md:h-24 h-14" />

            <button className="lg:h-[140px] lg:w-[330px] md:h-[120px] md:w-[300px] bg-[#6735EA] rounded-full"></button>

        </div>


        <div className=" flex  lg:h-[200px] lg:w-[68rem] md:h-[100px] md:w-[45rem] h-[50px] w-[25rem] justify-evenly items-center lg:-mt-14 md:mt-2">

        <img src= "/Frame.svg" alt ="star" className= "lg:h-32 md:h-24 h-14" />
<p className="lg:text-[150px] md:text-[100px] text-[50px] font-archivo gap-0 font-normal">
    Stand Out</p>

</div>
      </div>



       <div className="flex flex-col gap-10">
      <div className = "inline-flex w-2/4 font-inter text-[26px] ml-20 font-bold">We are The Agenc-E, a digital marketing agency based in Kolkata. Agenc-E fits the misfits, dreamers and those who are willing to think differently.</div>
      <button className="h-[120px] w-[350px] bg-[#6735EA] rounded-full ml-20"></button>

      </div>
    </section>
  )
}

export default Hero