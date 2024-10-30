import React from 'react';
import FlipCard from '../../components/FlipCard';
import Circle from '../../components/Circle';
import RotateTriangle from '../../components/RotateTriangle';

function AboutUs() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="w-screen text-center lg:flex lg:justify-center items-center gap-10 lg:gap-[20%] mx-[0%]">
        <h2 className="text-4xl lg:text-2xl text-purple-700 font-semibold mb-2 lg:mb-0 whitespace-nowrap">About Us</h2>
        <p className="text-xl lg:text-2xl max-w-4xl font-light italic  ">
          <span className="font-semibold not-italic">Collaborate. Innovate. Succeed.</span>
          As a dynamic digital agency, we partner with clients to craft innovative strategies that drive tangible results.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto justify-center">
        <div className='px-[10%] '>
          <FlipCard/>
        </div>
        <div className='lg:ml-[20%]'>
        <Circle />
        </div>
        <div className='lg:ml-[20%] px-[%]'>
        <RotateTriangle />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
