import React from 'react';
import { useInView, useIsMobile } from '../hooks';

export function Circle() {
  const [ref, isInView] = useInView();
  const isMobile = useIsMobile();
  const shouldShow = isMobile ? isInView : true;

  return (
    <div ref={ref} className="flex justify-center items-center">
      <div className={`relative ${isMobile ? '' : 'group'}`}>
        <div className="bg-[#6735EA] text-center p-8 rounded-full text-white transition-transform duration-300 transform h-[320px] w-[320px] flex flex-col items-center justify-center">
          <p className="text-9xl font-bold">45%</p>
          <p className="text-xl pt-4 font-semibold">User Uplift</p>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center rounded-full bg-white transition-all duration-500 transform 
          ${isMobile ? 
            (shouldShow ? 'scale-90' : 'scale-0') : 
            'scale-0 group-hover:scale-90'}`}>
          <div className="flex items-center justify-center h-[280px] w-[280px] rounded-full p-4">
            <p className="text-lg font-semibold text-[#6735EA] text-center">
              Designed and optimized intuitive UI/UX solutions, driving a 45% increase in user engagement across client websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circle;
