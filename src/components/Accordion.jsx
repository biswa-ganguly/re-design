import React,{useState} from 'react';


function Accordion() {

    const [itIsOpen,setOpen] = useState(null)

    const accordionIsOpen = (index) => {
      setOpen(itIsOpen === index ? null : index) 
    }

    const faqItems = [
        {
          question:"How Does Onboarding Work, and What’s Communication Like During Projects?  ",
          answere: "We keep it refreshingly straightforward. From day one, you’ll connect with the dedicated team that’s got your back. Expect regular updates, check-ins, and prompt responses to ensure you’re always in the loop and never left guessing.",
        },
         {
            question:"What Is the Pricing Structure for Your Services? ",
            answere: "Our pricing is as personalized as our strategies. Whether it’s social media marketing, website redesign, or an all-in-one package, we craft solutions that deliver value aligned with your unique goals.",
          },
          {
            question:"How Can I Reach The Agenc-E?  ",
            answere: "Getting in touch is easy! Whether through our website, email, or a quick phone call, we’re just a conversation away from transforming your ideas into something extraordinary.",
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
      <button onClick = {() => accordionIsOpen(index)} className =" w-full flex justify-between items-center p-4 bg-white text-black rounded-lg shadow-md">

        <span className =" text-lg font-semibold">{item.question}</span>
        <span className="text-lg font-semibold ">{itIsOpen === index ? '-' : '^'}</span>

      </button>

      {
        itIsOpen === index && (
          <div
          className="p-4 bg-white rounded-lg text-black transition-all ease-in-out duration-300"
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