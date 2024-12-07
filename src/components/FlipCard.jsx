import { useInView, useIsMobile } from "../hooks";

const FlipCard = (props) => {
  const [ref, isInView] = useInView();
  const isMobile = useIsMobile();
  const shouldShow = isMobile ? isInView : false;

  return (
    <div ref={ref} className={`${isMobile ? '' : 'group'} flex justify-center items-center h-[320px] w-[320px] [perspective:1000px]`}>
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] 
        ${isMobile ? 
          (shouldShow ? '[transform:rotateY(180deg)]' : '') : 
          'group-hover:[transform:rotateY(180deg)]'}`}>
        <div className="absolute inset-0 h-full w-full bg-[#FECE02] p-5 [backface-visibility:hidden] flex flex-col justify-center items-center">
          <p className="text-[#6735EA] text-2xl font-semibold mb-4">Top Spotters</p>
          <p className="text-9xl font-bold text-[#6735EA]">
            80<span className="text-8xl">%</span>
          </p>
        </div>

        <div className="absolute inset-0 h-full w-full bg-[#FECE02] text-white p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
          <p className="text-xl mt-2 mb-4 text-center text-[#6735EA]">
            80% of Target Keywords for Our Clients Rank in the Top 3 Positions. (SEO)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
