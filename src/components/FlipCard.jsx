const FlipCard = (props) => {
  return (
    <div className="group flex justify-center items-center h-[320px] w-[320px]  [perspective:1000px]">
      <div className="relative h-full w-full   transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 h-full w-full  bg-[#FECE02] p-5 [backface-visibility:hidden] flex flex-col  justify-center items-center">
          <p className="text-[#6735EA] text-2xl font-semibold mb-4">
            Completed Projects
          </p>
          <p className="text-9xl font-bold text-[#6735EA]">
            9<span className="text-8xl">+</span>
          </p>
        </div>

        <div className="absolute inset-0 h-full w-full  bg-[#FECE02] text-white p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
          <p className="text-lg mt-2 mb-4 text-center text-[#6735EA]">
            TheAgenc-E has already delivered 9 successful projects, showcasing
            our expertise in delivering innovative digital solutions.
          </p>
          {/* <Link to="/projects" className="mt-4 px-4 py-2 bg-[#6735EA] text-white rounded-lg">
            View Projects
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
