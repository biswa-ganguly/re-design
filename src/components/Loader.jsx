import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#FECE02] rounded-full opacity-20"
              style={{
                width: Math.random() * 10 + "px",
                height: Math.random() * 10 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `floating ${
                  Math.random() * 3 + 2
                }s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="relative w-80 h-80">
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              className={`absolute inset-0 border-4 rounded-full
                             ${
                               ring === 0
                                 ? "border-[#FECE02]"
                                 : ring === 1
                                 ? "border-[#6735EA]"
                                 : "border-white"
                             }
                             animate-[spin_${4 - ring}s_linear_infinite${
                ring % 2 ? "_reverse" : ""
              }]`}
              style={{
                transform: `scale(${1 - ring * 0.2})`,
              }}
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">
                <span className="bg-[#FECE02] bg-clip-text text-transparent">
                  The Agenc-E
                </span>
              </h1>

              <div className="w-48 h-2 mx-auto bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6735EA] rounded-full
                                  animate-[loading_2s_ease-in-out_infinite]
                                  bg-[length:200%_100%]"
                />
              </div>

              <div className="mt-4 text-white font-mono text-sm">
                <span className="inline-block animate-[flash_1.5s_ease-in-out_infinite]">
                  LOADING DIGITAL EXCELLENCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
