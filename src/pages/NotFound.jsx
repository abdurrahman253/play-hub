import { useNavigate } from "react-router-dom";
import { FaHome, FaGamepad } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate("/", { replace: true });
  const handleGoBack = () => navigate(-1);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden text-center text-white bg-gradient-to-b from-black via-gray-900 to-black sm:px-6 lg:px-8">
      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-48 h-48 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-orange-500/20 blur-3xl animate-pulse"></div>
        <div
          className="absolute w-48 h-48 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-red-500/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 w-full max-w-3xl">
        {/* 🔢 404 Text */}
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 drop-shadow-[0_0_40px_rgba(255,165,0,0.5)] animate-pulse leading-none">
          404
        </h1>

        {/* ❗ Error Message */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <FaGamepad className="text-2xl text-orange-500 sm:text-3xl animate-bounce" />
          <p className="text-xl font-bold tracking-widest text-gray-300 sm:text-2xl md:text-3xl">
            PAGE NOT FOUND
          </p>
          <FaGamepad
            className="text-2xl text-orange-500 sm:text-3xl animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        {/* 📜 Description */}
        <p className="max-w-md mx-auto mt-6 text-base text-gray-400 sm:text-lg">
          Looks like you've ventured into the void. <br />
          <span className="font-semibold text-orange-400">
            Return to the battlefield
          </span>{" "}
          and keep playing!
        </p>

        {/* 🔘 Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row sm:gap-6">
          {/* Go Back */}
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white transition-all duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            ⬅ Go Back
          </button>

          {/* Home */}
          <button
            onClick={handleGoHome}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white transition-all duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-105 shadow-[0_0_25px_rgba(255,165,0,0.6)]"
          >
            <FaHome className="text-lg sm:text-xl" />
            Back to Home
          </button>
        </div>

        {/* 🎮 Fun Message */}
        <div className="mt-10 text-sm text-gray-500 animate-pulse">
          🎮 Don't worry, even pro gamers get lost sometimes! 🎮
        </div>
      </div>

      {/* ✨ Decorative Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-ping pointer-events-none"></div>
    </div>
  );
};

export default NotFound;
