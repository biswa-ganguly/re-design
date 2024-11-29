import React,{useState} from 'react';


function Accordion() {

    const [itIsOpen,setOpen] = useState(null)

    const accordionIsOpen = (index) => {
      setOpen(itIsOpen === index ? null : index) 
    }

    const faqItems = [
        {
          question:"How does onboarding work and what's the communication like during projects?",
          answere: "During onboarding, we will guide you through the entire process and ensure smooth communication through regular updates and meetings.",
        },
         {
            question:"What is the Pricing Structure for the services?",
            answere: "During onboarding, we will guide you through the entire process and ensure smooth communication through regular updates and meetings.",
          },
          {
            question:"How can i contact the Agenc-E?",
            answere: "During onboarding, we will guide you through the entire process and ensure smooth communication through regular updates and meetings.",
          }
      ]
  return (
    <div className =" flex w-full items-center justify-center">
    <div className =" w-5/6 h-28">
    {faqItems.map((item,index) => (
      <div
      key={index}
      className = "border-b border-gray-700 mb-4"
      > 
      <button onClick = {() => accordionIsOpen(index)} className ={`w-full flex justify-between items-center p-4 bg-white text-black  shadow-md  ${
        itIsOpen === index ? `rounded-t-lg`:`rounded-lg `
      }`} >

        <span className =" text-lg font-semibold">{item.question}</span>
        <span className="text-lg font-semibold ">{itIsOpen === index ? <img src="/Arrow2.svg" alt="arrow" className="h-5 w-5 rotate-90 duration-500" /> :<img src="/Arrow2.svg" alt="arrow" className="h-5 w-5 duration-500" />}</span>

      </button>

      {
        itIsOpen === index && (
          <div
          className={`p-4 bg-white rounded-b-lg text-black overflow-hidden transition-max-height duration-500 ${
            itIsOpen === index ? `max-h-screen` : `max-h-0 `
          }`}
        >
          {item.answere}
        </div>
        )
      }

      </div>
    ))}
  </div>
  </div>
  )
}

export default Accordion