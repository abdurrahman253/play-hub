import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaStar, FaDownload, FaArrowLeft } from "react-icons/fa";

const GameDetails = () => {
  const game = useLoaderData();

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-300 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4 text-center">
          ⚠ Game Not Found
        </h2>
        <Link
          to="/"
          className="px-5 py-2 bg-orange-500 rounded-lg text-white font-semibold hover:bg-orange-600 transition-all text-sm sm:text-base"
        >
          ⬅ Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-white px-4 py-8">
      <div className="w-full max-w-4xl bg-white/10 p-5 sm:p-8 rounded-2xl shadow-[0_0_25px_rgba(255,165,0,0.2)] backdrop-blur-lg">
        
        {/* Game Cover */}
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-xl mb-6 border border-orange-400/30"
        />

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(255,165,0,0.4)] mb-4 text-center">
          {game.title}
        </h1>

        {/* Description */}
        <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed text-center">
          {game.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-gray-400">
          <div>
            <span className="block text-orange-400 font-semibold text-sm sm:text-base">
              Category
            </span>
            <span className="text-sm sm:text-base">{game.category}</span>
          </div>
          <div>
            <span className="block text-orange-400 font-semibold text-sm sm:text-base">
              Developer
            </span>
            <span className="text-sm sm:text-base">{game.developer}</span>
          </div>
          <div>
            <span className="block text-orange-400 font-semibold text-sm sm:text-base">
              Rating
            </span>
            <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm sm:text-base">
              <FaStar /> {game.ratings}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all text-sm sm:text-base"
          >
            <FaArrowLeft /> Back
          </Link>

          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition-all font-semibold text-sm sm:text-base"
          >
            <FaDownload /> Play Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
