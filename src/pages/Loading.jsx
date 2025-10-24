import React from "react";

const Loading = () => {
  return (
    // Full screen black background with a subtle, non-distracting pattern
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden font-sans text-white bg-black">
      {/* --- Advanced Background Glow Effects --- */}
      {/* Larger, slower, deep blue/purple glow */}
      <div className="absolute w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[100px] animate-pulse-slow opacity-50"></div>
      {/* Faster, smaller, vibrant red/orange glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[80px] animate-ping-slow delay-700 opacity-60"></div>
      
      {/* --- Main Loader Container --- */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        
        {/* --- Nested Premium Loader Animation --- */}
        <div className="relative w-36 h-36">
          
          {/* Outer, slower ring (Blue) - Increased Shadow for 'Premium' feel */}
          <div className="absolute inset-0 border-4 border-l-transparent border-indigo-500 rounded-full animate-spin-slow shadow-[0_0_50px_rgba(99,102,241,0.8)]"></div>
          
          {/* Middle, faster ring (Red) - Counter-spin */}
          <div className="absolute inset-4 border-4 border-t-transparent border-red-500 rounded-full animate-spin-reverse shadow-[0_0_35px_rgba(239,68,68,0.7)]"></div>
          
          {/* Inner pulsating core with an 'Aperture' effect */}
          <div className="absolute flex items-center justify-center inset-8">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-red-600 rounded-lg transform rotate-45 animate-pulse shadow-[0_0_40px_rgba(255,100,0,0.9),_0_0_60px_rgba(99,102,241,0.9)]"></div>
          </div>
        </div>

        {/* --- Loading Text with Cinematic Reveal Effect --- */}
        <div className="mt-16 text-center">
          {/* Title: Animated fade-in and subtle breathing pulse */}
          <p className="text-4xl font-black tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-red-500 to-yellow-400 animate-pulse-light transition-all duration-1000 delay-500 opacity-0 animate-fade-in">
            INITIATING SEQUENCE
            <span className="inline-block ml-3 text-5xl leading-none text-red-500 animate-bounce">.</span>
            <span className="inline-block text-5xl leading-none text-indigo-500 delay-300 animate-bounce">.</span>
            <span className="inline-block text-5xl leading-none text-yellow-500 animate-bounce delay-600">.</span>
          </p>

          {/* Subtext: Stylish, greyed-out text */}
          <p className="mt-4 text-sm tracking-[0.2em] text-gray-500 uppercase font-light">
            Optimizing assets for a seamless experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;