import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaDownload } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
// আপনার AuthContext এর path অনুযায়ী change করুন

const PopularGames = ({ games }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // AuthContext থেকে user নিন

  console.log("Games in PopularGames:", games);
  console.log("Current User:", user); // Check করার জন্য

  if (!games || games.length === 0) {
    return (
      <div className="py-20 text-lg text-center text-gray-400">
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
    
    // Check if user is logged in
    if (user) {
      console.log("✅ User logged in! Navigating to game details:", gameId);
      navigate(`/game/${gameId}`);
    } else {
      console.log("❌ User not logged in! Redirecting to login page");
      // Login page এ redirect করার সময় current game ID save করে রাখুন
      navigate("/auth/login", { state: { from: `/game/${gameId}` } });
    }
  };

  return (
    <section
     id="popular-games-section"
    className="w-11/12 py-16 mx-auto text-white bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(255,165,0,0.5)]">
          🔥 POPULAR GAMES
        </h2>
        <p className="mt-2 text-gray-400">
          Dive into the most trending and top-rated games this season.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {sortedGames.map((game) => (
          <div
            key={game.id}
            className="relative bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_0_20px_rgba(255,165,0,0.1)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.3)]"
          >
            <div className="overflow-hidden">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-orange-400">
                  {game.title}
                </h3>
                <p className="mb-3 text-sm text-gray-300">
                  {game.description.slice(0, 80)}...
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>
                    <span className="text-gray-500">Category:</span>{" "}
                    <span className="font-medium text-white">{game.category}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">By:</span>{" "}
                    <span className="font-medium text-white">{game.developer}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar className="text-lg" />
                  <span className="font-semibold">{game.ratings}</span>
                </div>

                <div className="relative z-10 flex gap-2">
                  {/* Details Button - Auth Check করে navigate করবে */}
                  <button
                    type="button"
                    onClick={(e) => handleDetailsClick(e, game.id)}
                    className="relative z-20 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600 hover:scale-105"
                    style={{ pointerEvents: 'auto' }}
                  >
                    Details
                  </button>

                  <a
                    href={game.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105"
                  >
                    <FaDownload />
                    <span>Play</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 transition-all duration-500 opacity-0 pointer-events-none rounded-2xl hover:opacity-100 bg-gradient-to-r from-orange-500/20 via-yellow-400/10 to-red-500/20 blur-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;