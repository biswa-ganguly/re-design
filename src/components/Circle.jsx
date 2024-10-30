import React from 'react';

function Circle() {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative group">
        <div className="bg-[#6735EA] text-center p-8 rounded-full text-white transition-transform duration-300 transform h-[320px] w-[320px] flex flex-col items-center justify-center">
          <p className="text-9xl font-bold">8.5</p>
          <p className="text-sm font-semibold">Client Rating</p>
        </div>


        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white transition-all duration-500 transform scale-0 group-hover:scale-90">
          <div className="flex items-center justify-center h-[280px] w-[280px] rounded-full p-4">
            <p className="text-lg font-semibold text-[#6735EA] text-center">
              The websites we've built for our clients have collectively attracted over 80,000 unique visitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circle;
