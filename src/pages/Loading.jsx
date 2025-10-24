import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[70vh] bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="relative flex flex-col items-center justify-center">
        {/* Glowing rotating ring */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-t-transparent border-orange-500 rounded-full animate-spin-slow blur-sm"></div>
          <div className="absolute inset-0 border-4 border-t-transparent border-orange-400 rounded-full animate-spin"></div>
        </div>

        {/* Pulse Core */}
        <div className="absolute w-6 h-6 bg-orange-500 rounded-full animate-pulse shadow-[0_0_25px_rgba(255,165,0,0.8)]"></div>

        {/* Text */}
        <p className="mt-10 text-lg font-extrabold tracking-widest text-white uppercase animate-pulse">
          <span className="text-orange-400">Loading</span>
          <span className="animate-bounce inline-block ml-1">...</span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
