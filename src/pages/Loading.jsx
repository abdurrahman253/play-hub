import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden font-sans text-white bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Animated background orbs - responsive sizing */}
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-indigo-900/10 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-pulse-slow opacity-50"></div>
      <div className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-red-600/15 rounded-full blur-[50px] sm:blur-[65px] lg:blur-[80px] animate-ping-slow delay-700 opacity-60"></div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Spinner container - responsive sizing */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
          {/* Outer ring */}
          <div className="absolute inset-0 border-[3px] sm:border-4 border-l-transparent border-indigo-500 rounded-full animate-spin-slow shadow-[0_0_30px_rgba(99,102,241,0.8)] sm:shadow-[0_0_40px_rgba(99,102,241,0.8)] lg:shadow-[0_0_50px_rgba(99,102,241,0.8)]"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-3 sm:inset-4 border-[3px] sm:border-4 border-t-transparent border-red-500 rounded-full animate-spin-reverse shadow-[0_0_25px_rgba(239,68,68,0.7)] sm:shadow-[0_0_30px_rgba(239,68,68,0.7)] lg:shadow-[0_0_35px_rgba(239,68,68,0.7)]"></div>
          
          {/* Center diamond */}
          <div className="absolute flex items-center justify-center inset-6 sm:inset-7 lg:inset-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-red-600 rounded-lg transform rotate-45 animate-pulse shadow-[0_0_30px_rgba(255,100,0,0.9),_0_0_50px_rgba(99,102,241,0.9)] sm:shadow-[0_0_35px_rgba(255,100,0,0.9),_0_0_55px_rgba(99,102,241,0.9)] lg:shadow-[0_0_40px_rgba(255,100,0,0.9),_0_0_60px_rgba(99,102,241,0.9)]"></div>
          </div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(239,68,68,1)]"></div>
          </div>
        </div>

        {/* Text content - responsive sizing and spacing */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center max-w-[90vw] sm:max-w-lg">
          {/* Main title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-red-500 to-yellow-400 animate-pulse-light animate-fade-in">
            INITIATING SEQUENCE
            <span className="inline-block ml-1.5 sm:ml-2 lg:ml-3 text-3xl sm:text-4xl lg:text-5xl leading-none text-red-500 animate-bounce">.</span>
            <span className="inline-block text-3xl sm:text-4xl lg:text-5xl leading-none text-indigo-500 delay-300 animate-bounce">.</span>
            <span className="inline-block text-3xl sm:text-4xl lg:text-5xl leading-none text-yellow-500 animate-bounce delay-600">.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 uppercase font-light px-4">
            Optimizing assets for a seamless experience
          </p>

          {/* Progress bar */}
          <div className="mt-6 sm:mt-8 w-full max-w-xs mx-auto">
            <div className="h-0.5 sm:h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 rounded-full animate-progress shadow-[0_0_20px_rgba(99,102,241,0.8)]"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes ping-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }
        @keyframes pulse-light {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 4s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 5s ease-in-out infinite; }
        .animate-pulse-light { animation: pulse-light 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; animation-delay: 0.5s; opacity: 0; }
        .animate-progress { animation: progress 3s ease-in-out infinite; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  );
};

export default Loading;