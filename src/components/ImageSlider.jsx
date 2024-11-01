
import react,{useState,useEffect} from "react";

function ImageSlider() {

    const images = [
      "/Slider1.webp",
      "/Slider2.webp",
      "/Slider3.webp",
      "/Slider4.webp"
    ]
  
  
    const [currentImageIndex,setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(()=>{
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000 );
  
      return () => clearInterval(timer);
  
    }, [images.length])
  
    return (
  
      <div className=" flex lg:h-[200px] lg:w-[56rem] md:h-[100px] md:w-[41rem] h-[50px] w-[25rem] justify-evenly items-center bg-red-600 ">
  
        <img
        src={images[currentImageIndex]}
        alt="Slideshow Image"
        className="w-full h-full object-fill"
        />
        
      </div>
  
    )
  
  
  }

  export default ImageSlider