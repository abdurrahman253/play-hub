import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaDownload } from "react-icons/fa";

const PopularGames = ({ games }) => {
  const navigate = useNavigate();

  console.log("Games in PopularGames:", games);

  if (!games || games.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400 text-lg">
        🎮 No games found. Please check your data!
      </div>
    );
  }

  const sortedGames = [...games].sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
  );

  const handleDetailsClick = (e, gameId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("🎮 BUTTON CLICKED! Game ID:", gameId);
    console.log("🎮 Navigating to:", `/game/${gameId}`);
    navigate(`/game/${gameId}`);
  };

  return (
    <section className="w-11/12 mx-auto py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(255,165,0,0.5)]">
          🔥 POPULAR GAMES
        </h2>
        <p className="text-gray-400 mt-2">
          Dive into the most trending and top-rated games this season.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedGames.map((game) => (
          <div
            key={game.id}
            className="relative bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_0_20px_rgba(255,165,0,0.1)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.3)]"
          >
            <div className="overflow-hidden">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-orange-400">
                  {game.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {game.description.slice(0, 80)}...
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>
                    <span className="text-gray-500">Category:</span>{" "}
                    <span className="text-white font-medium">{game.category}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">By:</span>{" "}
                    <span className="text-white font-medium">{game.developer}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar className="text-lg" />
                  <span className="font-semibold">{game.ratings}</span>
                </div>

                <div className="flex gap-2 relative z-10">
                  {/* Details Button - Fixed with proper z-index and pointer-events */}
                  <button
                    type="button"
                    onClick={(e) => handleDetailsClick(e, game.id)}
                    onMouseDown={() => console.log("Mouse down on Details button")}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 cursor-pointer relative z-20"
                    style={{ pointerEvents: 'auto' }}
                  >
                    Details
                  </button>

                  <a
                    href={game.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 flex items-center gap-1 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 relative z-20"
                  >
                    <FaDownload />
                    <span>Play</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Removed group class from parent, moved glow to separate layer */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-orange-500/20 via-yellow-400/10 to-red-500/20 blur-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;