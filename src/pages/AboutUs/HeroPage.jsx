import React, {useState,useEffect} from 'react'
import {AnimatePresence, easeInOut, motion} from "framer-motion"

function HeroPage() {


    const transform = [
        {
            title: "DEVELOPMENT",
        }, {
            title : "DESIGN"
        }, {
            title: "BRANDING"
        }, {
            title : "SEO"
        }, {
            title : "CAMPAIGN"
        }, {
            title:"EVERYTHING WE DO"
        }
    ]

    const [currentIndex,setCurrentIndex] = useState(0)

   useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (
            prevIndex + 1
        ) % transform.length)
    }, 2500)

    return () => clearInterval(interval)
   }, [])


    
  return (
    <div className=' min-h-screen w-full'>

        <img src="/Highlight.png" alt="heroimg" className='absolute top-0 right-0 w-full -z-10'/>

        <div className='flex flex-col w-full min-h-screen justify-center items-start p-10 leading-none'> 
        <div className='flex font-archivo text-[128px] font-medium'>WE DELIVER</div>
        <div className='flex items-center justify-center gap-8 font-archivo text-[128px] font-medium'>IMPACT IN

            <div className='w-[100px] h-[100px] bg-[#6735EA]'></div>
            <div className='w-[100px] h-[100px] bg-[#FECE02]'></div>
            <div className='w-[100px] h-[100px] bg-black'></div>

        </div>
        <div className='relative overflow-hidden'>
<AnimatePresence mode = "wait">
 <motion.div
key = {transform[currentIndex].title}
className='flex font-archivo text-[128px] justify-center items-center font-medium text-[#6735EA]'
initial = {{opacity:1, y:100}}
animate= {{opacity: 1,y:0, transition: {duration:0.5}}}
exit={{opacity:1,y:-130, transition: {
    duration:0.5, delay:0.3
}}}
 >{transform[currentIndex].title}
 
 </motion.div>
 </AnimatePresence>
 </div>



        </div>
    </div>
  )
}

export default HeroPage