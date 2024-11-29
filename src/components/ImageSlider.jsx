
import react,{useState,useEffect} from "react";

function ImageSlider() {

    const images = [
      "heroSec/Component1.png",
      "heroSec/Component2.png",  
      "heroSec/Component3.png",
      "heroSec/Component4.png"
    ]
  
  
    const [currentImageIndex,setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(()=>{
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000 );
  
      return () => clearInterval(timer);
  
    }, [images.length])
  
    return (
  
      <div className=" flex lg:h-[200px] lg:w-[56rem] md:h-[100px] md:w-[41rem] h-[50px] w-[25rem] ">
  
        <img
        src={images[currentImageIndex]}
        alt="Slideshow Image"
        className=" lg:w-[32%] lg:h-[54%] w-[32%] h-[80%]"
        />
        
      </div>
  
    )
  
  
  }

  export default ImageSlider