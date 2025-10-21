import React from "react";
import { GoDotFill } from "react-icons/go";

const Banner = () => {
  return (
    <section className="relative w-full px-6 py-12 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container flex flex-col items-center gap-10 mx-auto md:flex-row md:gap-8">
        
        {/* ---------- LEFT TEXT ---------- */}
        <div className="flex flex-col flex-1 gap-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            ULTIMATE <span className="text-orange-400">GAMER'S</span> HAVEN
          </h2>
          <p className="max-w-md mx-auto text-lg text-gray-300 md:text-xl md:mx-0">
            Step into the arena and experience next-level gaming with style, speed, and glory.
          </p>
          <div>
            <button className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-105">
              Play Now
            </button>
          </div>
        </div>

        {/* ---------- CENTER HERO (Visible only on large screens) ---------- */}
        <div className="relative flex-1 hidden lg:block">
          {/* Background behind hero */}
          <div className="absolute inset-0 scale-110 -z-10 opacity-80 blur-sm">
            <img
              src="https://i.ibb.co/5XLL33vx/bg-1-b4a39a49.png"
              alt="hero-bg"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Main hero image */}
          <div className="relative z-10">
            <img
              src="https://i.ibb.co/DP7vL2sv/hero-cc913f5c.png"
              alt="hero"
              className="object-contain w-full h-auto drop-shadow-[0_0_25px_rgba(255,165,0,0.5)]"
            />
          </div>
        </div>

        {/* ---------- RIGHT GLASS CARD ---------- */}
        <div className="flex flex-col flex-1 w-full gap-6 p-6 border shadow-lg md:max-w-sm bg-white/10 backdrop-blur-md border-white/20 rounded-2xl shadow-orange-500/10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-semibold text-orange-400">
                <GoDotFill />
                <h3>Last Winner</h3>
              </div>
              <div className="border-t divider border-white/20"></div>
              <div className="flex items-center gap-3">
                <img
                  src="https://i.ibb.co/C5WCK27t/avatar1-78d5596a.png"
                  alt="avatar"
                  className="object-cover w-16 h-16 border-2 border-orange-500 rounded-full"
                />
                <div className="text-white">
                  <p className="font-medium">Shoriful Raj</p>
                  <h4 className="font-bold text-green-400">+$459</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
