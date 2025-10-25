import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";
import gsap from "gsap";


const imageArray = [
  "https://i.postimg.cc/3Rp7YQgd/new-game-1.png",
  "https://i.postimg.cc/9F1RwKkP/new-game-2.png",
  "https://i.postimg.cc/cCFx6yJJ/new-game-3.png",
  "https://i.postimg.cc/4xVz7Bzh/new-game-4.png",
  "https://i.postimg.cc/rmPdYrSJ/new-game-5.png",
  "https://i.postimg.cc/Mpmm39XD/new-game-6.png",
  "https://i.postimg.cc/mk9QYw0Y/new-game-7.png",
  "https://i.postimg.cc/CxSj8bJP/new-game-8.png",
];

const ImageSlider = () => {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(imageArray.length - 1);
      setRightImage(1);
    } else if (midImage === imageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  const animateSlide = () => {

    gsap.fromTo(
      ".middleImage",
      { 
        opacity: 0, 
        filter: "blur(15px)", 
        scale: 0.7,
        y: 30 
      },
      { 
        opacity: 1, 
        filter: "blur(0px)", 
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power4.out" 
      }
    );

    
    gsap.fromTo(
      ".leftImage, .rightImage",
      { 
        opacity: 0, 
        filter: "blur(10px)", 
        scale: 0.6 
      },
      { 
        opacity: 0.6, 
        filter: "blur(2px)", 
        scale: 1,
        duration: 0.9,
        ease: "power3.out" 
      }
    );

    gsap.fromTo(
      ".glow-effect",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1.2, duration: 1, ease: "power2.out" }
    );
  };

  const Increment = () => {
    setMidImage((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
    animateSlide();
  };

  const Decrement = () => {
    setMidImage((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
    animateSlide();
  };

  // Auto-play logic
  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [midImage, isPlaying]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setMidImage((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
      animateSlide();
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Pause on hover
  useEffect(() => {
    const slider = sliderRef.current;
    const handleMouseEnter = () => stopAutoPlay();
    const handleMouseLeave = () => isPlaying && startAutoPlay();

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isPlaying]);

  return (
    <section
      ref={sliderRef}
      className="relative flex flex-col items-center justify-center w-full py-12 overflow-hidden md:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Section Title */}
      <div className="relative z-10 mb-8 text-center md:mb-12">
        <h2 className="text-3xl font-extrabold text-transparent md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 drop-shadow-[0_0_20px_rgba(255,165,0,0.5)]">
          FEATURED HIGHLIGHTS
        </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Explore the most anticipated game releases
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative z-10 flex items-center justify-center w-full gap-3 px-4 sm:gap-4 md:gap-6 lg:gap-10 max-w-7xl">
        {/* Left Image */}
        <div className="relative group">
          <img
            src={imageArray[leftImage]}
            alt="left preview"
            className="leftImage w-16 h-24 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-48 lg:h-72 xl:w-56 xl:h-80 rounded-lg md:rounded-xl opacity-50 blur-[2px] scale-90 object-cover transition-all duration-700 cursor-pointer hover:opacity-70 hover:scale-95 shadow-lg"
            onClick={Decrement}
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100 md:rounded-xl"></div>
        </div>

        {/* Middle Image (Main) */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="glow-effect absolute -inset-4 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-yellow-500/30 rounded-2xl md:rounded-3xl blur-2xl"></div>
          
          <img
            src={imageArray[midImage]}
            alt="featured game"
            className="middleImage relative z-10 w-40 h-56 sm:w-56 sm:h-80 md:w-72 md:h-96 lg:w-[420px] lg:h-[560px] xl:w-[480px] xl:h-[640px] rounded-xl md:rounded-2xl shadow-[0_0_80px_rgba(255,165,0,0.6)] object-cover transition-all duration-700 border-2 border-orange-500/30"
          />

          {/* Image Overlay Info */}
          <div className="absolute inset-0 z-20 transition-opacity duration-300 opacity-0 rounded-xl md:rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-100">
            <div className="absolute flex flex-col items-center gap-2 transform -translate-x-1/2 bottom-6 left-1/2">
              <div className="px-4 py-2 text-xs font-bold text-white border rounded-full md:text-sm bg-black/60 backdrop-blur-md border-orange-500/50">
                Image {midImage + 1} of {imageArray.length}
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 md:w-12 md:h-12 rounded-tl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500 md:w-12 md:h-12 rounded-br-xl"></div>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <img
            src={imageArray[rightImage]}
            alt="right preview"
            className="rightImage w-16 h-24 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-48 lg:h-72 xl:w-56 xl:h-80 rounded-lg md:rounded-xl opacity-50 blur-[2px] scale-90 object-cover transition-all duration-700 cursor-pointer hover:opacity-70 hover:scale-95 shadow-lg"
            onClick={Increment}
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100 md:rounded-xl"></div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 flex items-center gap-4 mt-8 md:gap-6 md:mt-12">
        {/* Previous Button */}
        <button
          onClick={Decrement}
          className="group p-3 md:p-4 text-lg md:text-xl text-white transition-all duration-300 border rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 border-white/40 hover:border-orange-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
          aria-label="Previous image"
        >
          <IoIosArrowBack className="transition-transform group-hover:-translate-x-1" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-3 md:p-4 text-base md:text-lg text-white transition-all duration-300 border rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 border-white/40 hover:border-purple-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Next Button */}
        <button
          onClick={Increment}
          className="group p-3 md:p-4 text-lg md:text-xl text-white transition-all duration-300 border rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 border-white/40 hover:border-orange-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
          aria-label="Next image"
        >
          <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Progress Dots  */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-6 md:gap-3 md:mt-8 max-w-md mx-auto px-4">
        {imageArray.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setMidImage(index);
              animateSlide();
            }}
            className={`group relative transition-all duration-300 ${
              index === midImage ? "w-10 md:w-14" : "w-3 md:w-4"
            }`}
            aria-label={`Go to image ${index + 1}`}
          >
            <div
              className={`h-3 md:h-4 rounded-full transition-all duration-300 ${
                index === midImage
                  ? "bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_15px_rgba(255,165,0,0.8)]"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            ></div>
            {index === midImage && (
              <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-md animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="relative z-10 px-4 py-2 mt-6 text-xs font-semibold text-center text-white border rounded-full md:text-sm bg-black/60 backdrop-blur-md border-white/20">
        <span className="text-orange-400">{midImage + 1}</span> / {imageArray.length}
      </div>
    </section>
  );
};

export default ImageSlider;