import React, { useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const Banner = () => {
  const spanRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.to(spanRefs.current[0], {
      scrambleText: { text: "ULTIMATE", chars: "upperCase", speed: 0.3 },
      duration: 1.5,
    })
      .to(spanRefs.current[1], {
        scrambleText: { text: "GAMER'S", chars: "upperCase", speed: 0.3 },
        duration: 1.5,
      })
      .to(spanRefs.current[2], {
        scrambleText: { text: "HAVEN", chars: "upperCase", speed: 0.3 },
        duration: 1.5,
      });
  }, []);

  return (
    <section className="relative w-full px-6 py-12 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container flex flex-col items-center gap-10 mx-auto md:flex-row md:gap-8">
        
        {/* ---------- LEFT TEXT ---------- */}
        <div className="flex flex-col flex-1 gap-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            <span ref={(el) => (spanRefs.current[0] = el)} className="text-white"></span>{" "}
            <span ref={(el) => (spanRefs.current[1] = el)} className="text-orange-400"></span>{" "}
            <span ref={(el) => (spanRefs.current[2] = el)} className="text-white"></span>
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

        {/* ---------- CENTER HERO ---------- */}
        <div className="relative flex-1 hidden lg:block">
          <div className="absolute inset-0 scale-110 -z-10 opacity-80 blur-sm">
            <img
              src="https://i.ibb.co/5XLL33vx/bg-1-b4a39a49.png"
              alt="hero-bg"
              className="object-contain w-full h-full"
            />
          </div>
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

            <div className="flex items-center gap-2 text-xl font-bold text-red-400">
              <GoDotFill />
              <h3 className="py-2 text-white">Last Winner</h3>
            </div>

          {/* ----- CARD 1 ----- */}
          <div className="flex flex-col gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]">
            <div className="border-t border-white/20"></div>
            <div className="flex items-center gap-6 px-4 py-4">
              <img
                src="https://i.ibb.co/C5WCK27t/avatar1-78d5596a.png"
                alt="avatar"
                className="object-cover w-16 h-16 border-2 border-orange-500 rounded-full"
              />
              <div className="text-white">
                <p className="font-medium">Cristofer Dorwart</p>
                <h4 className="font-bold text-green-400">+$459</h4>
              </div>
            </div>
          </div>

          {/* ----- CARD 2 ----- */}
          <div className="flex flex-col gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]">
            <div className="border-t border-white/20"></div>
            <div className="flex items-center gap-6 px-4 py-4">
              <img
                src="https://i.postimg.cc/zvBPkxRS/avatar2-a42fc869.png"
                alt="avatar"
                className="object-cover w-16 h-16 border-2 border-orange-500 rounded-full"
              />
              <div className="text-white">
                <p className="font-medium">Luna Evergreen</p>
                <h4 className="font-bold text-green-400">+$382</h4>
              </div>
            </div>
          </div>

          {/* ----- CARD 3 ----- */}
          <div className="flex flex-col gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]">
            <div className="border-t border-white/20"></div>
            <div className="flex items-center gap-6 px-4 py-4">
              <img
                src="https://i.postimg.cc/Qdrw2JL8/avatar3-2143645d.png"
                alt="avatar"
                className="object-cover w-16 h-16 border-2 border-orange-500 rounded-full"
              />
              <div className="text-white">
                <p className="font-medium">Lucas Thornfield</p>
                <h4 className="font-bold text-green-400">+$520</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;