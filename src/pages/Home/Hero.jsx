import React from 'react';

function Hero() {
  return (
    <section>
      <img src= "/Highlight.png" alt = "Heroimage" className = "absolute top-0 right-0 w-full -z-50" />

      <div className="flex flex-col font-semibold justify-start items-center min-h-screen w-ful relative lg:-mt-6 md:mt-12 ">
        
        <div className=" flex lg:h-[200px] lg:w-[56rem] md:h-[100px] md:w-[41rem] h-[50px] w-[25rem]  justify-evenly items-center">
        <div className =" lg:w-[280px] lg:h-[100px] md:w-[180px] md:h-[60px] w-[110px] h-[40px]  bg-black rounded-full inline-block"/>

        <p className=" text-black lg:text-[120px] md:text-[80px] text-[50px] font-archivo font-normal whitespace-nowrap">
            WE MAKE</p>
        </div>



        <div className=" flex lg:h-[200px] lg:w-[58rem] md:h-[100px] md:w-[41rem] h-[50px] w-[25rem] justify-evenly items-center lg:-mt-14 md:-mt-5">
        <img src= "/Star.svg" alt ="star" className= "lg:h-24 md:h-16 h-12" />

        <p className=" text-[#6735EA] lg:text-[120px] md:text-[80px] text-[50px] font-archivo font-medium">
            WEBSITES</p>
            <p className=" text-black lg:text-[120px] md:text-[80px] text-[50px] font-archivo font-medium ml-4">
            &</p>
        </div>
        

        <div className=" flex-row flex lg:h-[200px] lg:w-[66rem] md:h-[100px] md:w-[40rem] h-[50px] w-[25rem] justify-center items-center gap-5 lg:-mt-14 lg:ml-[11rem] md:-mt-5">

        <p className="  lg:text-[120px] md:text-[80px] text-[50px] font-archivo text-[#6735EA] font-medium">
            BRANDS</p>
            <img src= "/Union.svg" alt ="star" className= "lg:h-24 md:h-16 h-12" />

            <button className="lg:h-[100px] lg:w-[300px] md:h-[60px] md:w-[150px] w-[100px] h-[40px] bg-[#6735EA] rounded-full"></button>
            <div className = " flex-col mb-16 space-y-0 -mt-10 hidden lg:flex">
          <div className = "font-architects text-2xl font-light whitespace-nowrap">Just a button</div>
          <img src = "/Arrow.svg" alt ="Arrow" className ="mb-5 lg:w-24 lg:h-24 md:w-16 md:h-16 "/>

          </div>
          <div className = "absolute md:block lg:hidden font-architects text-l mb-16 font-light whitespace-nowrap right-1">Just a button</div>
          <img src = "/Arrow.svg" alt ="Arrow" className =" absolute md:block lg:hidden right-16 mb-5 md:w-12 md:h-12 "/>

        </div>


        <div className=" flex  lg:h-[200px] lg:w-[56rem] md:h-[100px] md:w-[45rem] h-[50px] w-[25rem] justify-evenly items-center lg:-mt-14 md:-mt-5">

        <img src= "/Frame.svg" alt ="star" className= "lg:h-32 md:h-20 h-14" />
<p className="lg:text-[120px] md:text-[80px] text-[50px] font-archivo gap-0 font-medium">
    STAND OUT</p>

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