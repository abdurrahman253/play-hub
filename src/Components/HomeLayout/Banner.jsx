import React, { useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import ImageSlider from "../ImageSlider/ImageSlider";

gsap.registerPlugin(ScrambleTextPlugin);

const Banner = () => {
  const spanRefs = useRef([]);

  useEffect(() => {
    // Set initial text for spans
    if (spanRefs.current[0]) spanRefs.current[0].textContent = "";
    if (spanRefs.current[1]) spanRefs.current[1].textContent = "";
    if (spanRefs.current[2]) spanRefs.current[2].textContent = "";

    const tl = gsap.timeline({ defaults: { ease: "none" }, delay: 0.5 });

    tl.to(spanRefs.current[0], {
      scrambleText: { text: "ULTIMATE", chars: "upperCase", speed: 0.3 },
      duration: 1.5,
    })
      .to(spanRefs.current[1], {
        scrambleText: { text: "GAMER'S", chars: "upperCase", speed: 0.3 },
        duration: 1.5,
      }, "-=0.5")
      .to(spanRefs.current[2], {
        scrambleText: { text: "HAVEN", chars: "upperCase", speed: 0.3 },
        duration: 1.5,
      }, "-=0.5");
  }, []);

  return (
    <div id="top" className="pt-2 md:pt-20">
      <section className="relative w-full min-h-screen px-4 py-8 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center gap-8 mx-auto lg:flex-row lg:gap-12 max-w-7xl">
          
          {/* ---------- LEFT TEXT SECTION ---------- */}
          <div className="flex flex-col flex-1 gap-6 text-center lg:text-left order-2 lg:order-1 w-full">
            <div className="space-y-2 min-h-[140px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span 
                  ref={(el) => (spanRefs.current[0] = el)} 
                  className="block text-white drop-shadow-lg"
                  style={{ minHeight: '1.2em' }}
                >
                  ULTIMATE
                </span>
                <span 
                  ref={(el) => (spanRefs.current[1] = el)} 
                  className="block text-orange-400 drop-shadow-lg"
                  style={{ minHeight: '1.2em' }}
                >
                  GAMER'S
                </span>
                <span 
                  ref={(el) => (spanRefs.current[2] = el)} 
                  className="block text-white drop-shadow-lg"
                  style={{ minHeight: '1.2em' }}
                >
                  HAVEN
                </span>
              </h2>
            </div>
            
            <p className="max-w-md mx-auto text-base sm:text-lg md:text-xl text-gray-300 lg:mx-0 leading-relaxed">
              Step into the arena and experience next-level gaming with style, speed, and glory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
              <button className="group relative px-8 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 shadow-lg hover:shadow-orange-500/50 w-full sm:w-auto">
                <span className="relative z-10">Play Now</span>
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 w-full sm:w-auto">
                Learn More
              </button>
            </div>

            {/* Stats Section - Mobile/Tablet */}
            <div className="grid grid-cols-3 gap-4 mt-6 lg:hidden">
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <h4 className="text-2xl font-bold text-orange-400">50K+</h4>
                <p className="text-xs text-gray-400 mt-1">Active Players</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <h4 className="text-2xl font-bold text-orange-400">100+</h4>
                <p className="text-xs text-gray-400 mt-1">Games</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <h4 className="text-2xl font-bold text-orange-400">24/7</h4>
                <p className="text-xs text-gray-400 mt-1">Support</p>
              </div>
            </div>
          </div>

          {/* ---------- CENTER HERO IMAGE ---------- */}
          <div className="relative flex-1 w-full max-w-md lg:max-w-lg order-1 lg:order-2">
            <div className="relative">
              {/* Glow Effect Behind Hero */}
              <div className="absolute inset-0 scale-110 -z-10 opacity-60 blur-2xl">
                <img
                  src="https://i.ibb.co/5XLL33vx/bg-1-b4a39a49.png"
                  alt="hero-bg"
                  className="object-contain w-full h-full"
                />
              </div>
              
              {/* Main Hero Image */}
              <div className="relative z-10 animate-float">
                <img
                  src="https://i.ibb.co/DP7vL2sv/hero-cc913f5c.png"
                  alt="hero"
                  className="object-contain w-full h-auto drop-shadow-[0_0_30px_rgba(255,165,0,0.6)]"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 -right-4 w-20 h-20 bg-orange-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* ---------- RIGHT GLASS CARD - WINNERS ---------- */}
          <div className="flex flex-col flex-1 w-full gap-4 p-5 md:p-6 border shadow-2xl bg-black/40 backdrop-blur-xl border-white/10 rounded-2xl shadow-orange-500/20 order-3 max-w-md lg:max-w-sm">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <GoDotFill className="text-red-500 text-xl animate-pulse" />
                  <div className="absolute inset-0 bg-red-500/50 rounded-full blur-sm"></div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Last Winners</h3>
              </div>
              <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">Live</span>
            </div>

            {/* Winner Cards */}
            <div className="space-y-3">
              {/* Winner 1 */}
              <div className="group flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 cursor-pointer transition-all duration-300 hover:from-orange-500/10 hover:border-orange-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                <div className="relative">
                  <img
                    src="https://i.ibb.co/C5WCK27t/avatar1-78d5596a.png"
                    alt="avatar"
                    className="object-cover w-12 h-12 md:w-14 md:h-14 border-2 border-orange-400/50 rounded-full group-hover:border-orange-400 transition-colors duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-black">1</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate text-sm md:text-base">Cristofer Dorwart</p>
                  <p className="text-xs text-gray-400">5 mins ago</p>
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-green-400 text-sm md:text-base">+$459</h4>
                  <p className="text-xs text-gray-500">Winner</p>
                </div>
              </div>

              {/* Winner 2 */}
              <div className="group flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 cursor-pointer transition-all duration-300 hover:from-orange-500/10 hover:border-orange-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                <div className="relative">
                  <img
                    src="https://i.postimg.cc/zvBPkxRS/avatar2-a42fc869.png"
                    alt="avatar"
                    className="object-cover w-12 h-12 md:w-14 md:h-14 border-2 border-orange-400/50 rounded-full group-hover:border-orange-400 transition-colors duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-black">2</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate text-sm md:text-base">Luna Evergreen</p>
                  <p className="text-xs text-gray-400">12 mins ago</p>
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-green-400 text-sm md:text-base">+$382</h4>
                  <p className="text-xs text-gray-500">Winner</p>
                </div>
              </div>

              {/* Winner 3 */}
              <div className="group flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 cursor-pointer transition-all duration-300 hover:from-orange-500/10 hover:border-orange-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
                <div className="relative">
                  <img
                    src="https://i.postimg.cc/Qdrw2JL8/avatar3-2143645d.png"
                    alt="avatar"
                    className="object-cover w-12 h-12 md:w-14 md:h-14 border-2 border-orange-400/50 rounded-full group-hover:border-orange-400 transition-colors duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-black">3</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate text-sm md:text-base">Lucas Thornfield</p>
                  <p className="text-xs text-gray-400">18 mins ago</p>
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-green-400 text-sm md:text-base">+$520</h4>
                  <p className="text-xs text-gray-500">Winner</p>
                </div>
              </div>
            </div>

            {/* View All Button */}
            <button className="w-full py-2 mt-2 text-sm font-semibold text-orange-400 transition-all duration-300 bg-white/5 border border-white/10 rounded-lg hover:bg-orange-500/10 hover:border-orange-500/30">
              View All Winners →
            </button>
          </div>
        </div>

        {/* Stats Section - Desktop Only */}
        <div className="hidden lg:grid grid-cols-3 gap-6 container mx-auto max-w-7xl mt-16">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <h4 className="text-4xl font-bold text-orange-400">50K+</h4>
            <p className="text-sm text-gray-400 mt-2">Active Players Daily</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <h4 className="text-4xl font-bold text-orange-400">100+</h4>
            <p className="text-sm text-gray-400 mt-2">Premium Games</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <h4 className="text-4xl font-bold text-orange-400">24/7</h4>
            <p className="text-sm text-gray-400 mt-2">Customer Support</p>
          </div>
        </div>
      </section>
     
      <ImageSlider />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;