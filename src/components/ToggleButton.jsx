import React, { useState,useEffect,useRef } from 'react';
import {motion} from "framer-motion";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const [xValue,setXvalue] = useState(5);
  const containerRef = useRef(null)

  const handleClick = () => {
    setIsOn(!isOn);
  };


  useEffect(() => {

    const handleResize = () =>{
      const containerWidth = containerRef.current?.offsetWidth || 0;
      setXvalue(isOn ? containerWidth * 0.58 : 7)
    }

  
  handleResize();
  window.addEventListener('resize',handleResize)

  return () => {
    window.removeEventListener('resize',handleResize)
  }
}, [isOn])





  return (
    <div className = " flex justify-center items-center">
    <div
    ref = {containerRef}
      className={`lg:h-[100px] lg:w-[210px] md:h-[60px] md:w-[130px] w-[90px] lg:px-0 md:px-0 -inset-0 h-[40px] flex items-center rounded-full transition-colors cursor-pointer  ${isOn ? 'bg-black' : 'bg-[#6735EA]'}`}
      onClick={handleClick}
    >
      <motion.div
      animate = {{
        x: xValue,
        // x: isOn ? 116 : 5,
        scaleX: isOn ? [1, 2.10, 1] : [1, 2.05, 1], 
          backgroundColor: isOn ? '#FECE02' : '#000000',
       }}
       transition={{
        x: { type: 'spring',stiffness: 900, damping: 140 },
        scaleX: { duration: 0.5, ease: 'easeInOut' }, 
        backgroundColor: { duration: 0.3 },
       }}
       style={{
        originX: isOn ? 1.15 : 0
       }}
        className={`lg:w-20 lg:h-20 md:w-12 md:h-12 w-8 h-8 rounded-full `}
        
        
      /> 
    </div>
    </div>
  );
}

export default ToggleButton;
