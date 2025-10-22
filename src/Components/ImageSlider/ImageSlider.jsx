import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

const imageArray = ["/slide-1.png", "/slide-2.png", "/slide-3.png"];

const ImageSlider = () => {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);
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
      { opacity: 0, filter: "blur(10px)", scale: 0.8 },
      { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      ".leftImage, .rightImage",
      { opacity: 0, filter: "blur(8px)", scale: 0.7 },
      { opacity: 0.6, filter: "blur(3px)", scale: 1, duration: 0.8, ease: "power3.out" }
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

 
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [midImage]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setMidImage((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Pause auto-play on hover
  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);
    return () => {
      slider.removeEventListener("mouseenter", stopAutoPlay);
      slider.removeEventListener("mouseleave", startAutoPlay);
    };
  }, []);

  return (
    <section
      ref={sliderRef}
      className="relative flex flex-col items-center justify-center w-full py-16 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900"
    >
      {/* --- Slider Container --- */}
      <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-10 w-full max-w-6xl">
        <img
          src={imageArray[leftImage]}
          alt="left"
          className="leftImage w-24 h-36 sm:w-32 sm:h-44 md:w-48 md:h-64 lg:w-64 lg:h-96 xl:w-72 xl:h-[450px] rounded-xl opacity-60 blur-sm scale-90 object-cover transition-all duration-700"
        />

        <img
          src={imageArray[midImage]}
          alt="middle"
          className="middleImage w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-[400px] lg:w-[460px] lg:h-[540px] xl:w-[520px] xl:h-[600px] rounded-2xl shadow-[0_0_60px_rgba(255,165,0,0.5)] object-cover transition-all duration-700"
        />

        <img
          src={imageArray[rightImage]}
          alt="right"
          className="rightImage w-24 h-36 sm:w-32 sm:h-44 md:w-48 md:h-64 lg:w-64 lg:h-96 xl:w-72 xl:h-[450px] rounded-xl opacity-60 blur-sm scale-90 object-cover transition-all duration-700"
        />
      </div>

      {/* --- Navigation Buttons --- */}
      <div className="flex items-center gap-5 mt-8">
        <button
          onClick={Decrement}
          className="p-4 text-xl text-white transition-all duration-300 border rounded-full hover:bg-orange-500 border-white/40 hover:scale-110"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={Increment}
          className="p-4 text-xl text-white transition-all duration-300 border rounded-full rotate-180 hover:bg-orange-500 border-white/40 hover:scale-110"
        >
          <IoIosArrowBack />
        </button>
      </div>

      {/* --- Dots --- */}
      <div className="flex gap-3 mt-6">
        {imageArray.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === midImage ? "bg-orange-500 scale-125 shadow-[0_0_10px_rgba(255,165,0,0.6)]" : "bg-gray-500"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
