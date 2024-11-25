import React from 'react'
import Accordion from '../../components/Accordion'
import BookAMeetingV2 from '../../components/BookAMeetingV2'

function Faq() {

  const text = "agency"

  const splitLetters = text.split(" ").map((value,index) => (
     <span
    key = {index}
    className =""
    >
     {value}
    </span>
  )) 


  return (
    <>    <div className="h-[80vh] bg-[#6735EA]">
      <div className="flex flex-row justify-between p-3">
        <div className="flex justify-start items-start text-[#FECE02] font-archivo lg:text-[80px] text-[45px] lg:p-7 p-0 font-semibold">
          FAQs
        </div>

        <div className="flex flex-col items-center p-12">
          <div className="flex items-center -mb-8">
            <img src="Arrow.svg" alt="arrow" className="w-20 lg:w-36 fill-white -rotate-[160deg] mr-4" />
            <img src="/questionmark.svg" alt="questionmark" className="lg:w-20 lg:h-20 w-16 h-16 hover:rotate-180 duration-300" />
          </div>

          <div className="text-white font-architects lg:text-[26px] text-[20px] mt-4 mr-52">
            Nothing Special
          </div>
        </div>
      </div>
     <Accordion/>
    </div>
    
    <div className = "h-[60vh] ">
      <div className = "flex lg:flex-row flex-col justify-between">
        <div className="flex flex-col">
          <div className =" w-full font-archivo text-[64px] leading-none p-10">We are not just any <span className =" font-archivo font-extralight text-[64px]">{splitLetters}</span>, <br />we are The Agenc-E</div>
          <BookAMeetingV2/>
        </div>

        <img src="Frame48.svg" alt="frame" className ="p-10" />
      </div>
    </div>
    </>

  )
}

export default Faq
