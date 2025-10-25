import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaDownload, FaGamepad, FaTrophy } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const PopularGames = ({ games }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!games || games.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <FaGamepad className="text-6xl text-orange-400 opacity-50" />
          <p className="text-lg text-gray-400">
            🎮 No games found. Please check your data!
          </p>
        </div>
      </div>
    );
  }

  const sortedGames = [...games].sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
  );

  const handleDetailsClick = (e, gameId) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (user) {
      navigate(`/game/${gameId}`);
    } else {
      navigate("/auth/login", { state: { from: `/game/${gameId}` } });
    }
  };

  return (
    <section
      id="popular-games-section"
      className="relative w-full px-4 py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black scroll-mt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-red-500/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaTrophy className="text-3xl md:text-4xl text-orange-400 animate-bounce" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 drop-shadow-[0_0_30px_rgba(255,165,0,0.5)]">
              POPULAR GAMES
            </h2>
            <FaTrophy className="text-3xl md:text-4xl text-orange-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Dive into the most trending and top-rated games this season. Join millions of players worldwide!
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="text-orange-400 font-bold">{games.length}</span>
              <span className="text-gray-400 text-sm ml-1">Games</span>
            </div>
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="text-orange-400 font-bold">Top Rated</span>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedGames.map((game, index) => (
            <div
              key={game.id}
              className="group relative bg-gradient-to-b from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-orange-500/30 hover:border-orange-500/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rank Badge */}
              {index < 3 && (
                <div className="absolute top-4 left-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
                  <span className="text-sm font-bold text-black">#{index + 1}</span>
                </div>
              )}

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-yellow-400/30">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="text-white font-bold text-sm">{game.ratings}</span>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-52 md:h-56">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Hover Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-orange-500/90 flex items-center justify-center backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <FaGamepad className="text-white text-2xl" />
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 md:p-6 flex flex-col justify-between h-auto min-h-[240px]">
                <div className="space-y-3">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-1">
                    {game.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-gray-400">Category:</span>
                      <span className="font-semibold text-orange-400">{game.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-gray-400">By:</span>
                      <span className="font-semibold text-white truncate max-w-[100px]">{game.developer}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-4">
                  <button
                    type="button"
                    onClick={(e) => handleDetailsClick(e, game.id)}
                    className="flex-1 relative z-20 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 shadow-lg hover:shadow-orange-500/50"
                  >
                    View Details
                  </button>

                  <a
                    href={game.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 hover:border-orange-500/50"
                  >
                    <FaDownload className="text-sm" />
                    <span className="hidden sm:inline">Play</span>
                  </a>
                </div>
              </div>

              {/* Animated Glow Effect */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl bg-gradient-to-r from-orange-500/10 via-yellow-400/10 to-red-500/10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Load More Button (Optional) */}
        <div className="flex justify-center mt-12">
          <button className="group px-8 py-3 font-semibold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-orange-500 hover:border-orange-500 hover:scale-105">
            <span className="flex items-center gap-2">
              Load More Games
              <FaGamepad className="group-hover:animate-bounce" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default PopularGames;