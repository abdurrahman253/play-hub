import React, { useState, useEffect } from "react";
import { FaTrophy, FaCrown, FaMedal, FaSpinner } from "react-icons/fa";
import Loading from "./Loading";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
     window.scrollTo(0, 0);
    }, []);


  useEffect(() => {
    setTimeout(() => {
      setPlayers([
        { id: 1, name: "RazorX", score: 9850, rank: 1 },
        { id: 2, name: "ShadowHunter", score: 9420, rank: 2 },
        { id: 3, name: "NovaStrike", score: 9100, rank: 3 },
        { id: 4, name: "BlitzKrieg", score: 8920, rank: 4 },
        { id: 5, name: "PhantomEdge", score: 8750, rank: 5 },
        { id: 6, name: "CyberVortex", score: 8600, rank: 6 },
        { id: 7, name: "NeonReaper", score: 8450, rank: 7 },
        { id: 8, name: "QuantumFury", score: 8300, rank: 8 },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const getRankIcon = (rank) => {
    if (rank === 1) return <FaCrown className="text-yellow-400 text-xl sm:text-2xl" />;
    if (rank === 2) return <FaMedal className="text-gray-300 text-lg sm:text-xl" />;
    if (rank === 3) return <FaTrophy className="text-[#cd7f32] text-lg sm:text-xl" />;
    return <span className="text-base sm:text-lg font-bold text-orange-400">#{rank}</span>;
  };

  const getRankBg = (rank) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border-yellow-500/40";
    if (rank === 2) return "bg-gradient-to-r from-gray-400/20 to-gray-300/20 border-gray-400/40";
    if (rank === 3) return "bg-gradient-to-r from-[#cd7f32]/20 to-[#cd7f32]/10 border-[#cd7f32]/40";
    return "hover:bg-gray-800/50";
  };

   if (loading) {
    return <Loading />
   }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start sm:justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black/30 to-gray-900/50 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-orange-500/20 rounded-full blur-lg sm:blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 sm:top-60 right-4 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-purple-500/20 rounded-full blur-xl sm:blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 sm:bottom-40 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-red-500/20 rounded-full blur-lg sm:blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-12 sm:bottom-20 right-4 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-orange-400/20 rounded-full blur-lg sm:blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/*  Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 w-full px-4 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-widest mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-pulse-slow drop-shadow-lg sm:drop-shadow-xl md:drop-shadow-2xl leading-tight">
          ELITE LEADERBOARD
        </h1>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-400 tracking-widest uppercase animate-fade-in" style={{ animationDelay: '0.3s' }}>
          TOP GAMERS WORLDWIDE
        </div>
      </div>

      {/*  Leaderboard Container */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        <div className="bg-black/30 sm:bg-black/40 border border-orange-500/20 sm:border-orange-500/30 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 backdrop-blur-xl sm:backdrop-blur-2xl shadow-xl sm:shadow-2xl shadow-orange-500/5 sm:shadow-orange-500/10">
          <div className="bg-gray-900/40 sm:bg-gray-900/50 border border-gray-800/30 sm:border-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-lg sm:backdrop-blur-xl">
            
            {/* Header Row */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-orange-500/10 sm:border-orange-500/20">
              <div className="flex items-center justify-between text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-400 font-bold">
                <span className="w-8 sm:w-12 flex justify-center">RANK</span>
                <span className="flex-1 text-center min-w-0 px-2 sm:ml-4 sm:ml-8">PLAYER</span>
                <span className="text-right min-w-[60px] sm:min-w-[80px]">SCORE</span>
              </div>
            </div>

            {/* Player Rows */}
            <div className="divide-y divide-gray-800/30 sm:divide-gray-800/50">
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className={`flex items-center p-3 sm:p-4 md:p-6 transition-all duration-500 hover:scale-100 sm:hover:scale-[1.02] hover:shadow-lg sm:hover:shadow-2xl sm:hover:shadow-orange-500/25 group ${
                    getRankBg(player.rank)
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Rank Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500/10 sm:from-orange-500/20 to-red-500/10 sm:to-red-500/20 border border-orange-500/30 sm:border-orange-500/50 mr-3 sm:mr-4 md:mr-6 group-hover:bg-orange-500/30 sm:group-hover:bg-orange-500/40 transition-all duration-300">
                    {getRankIcon(player.rank)}
                  </div>

                  {/* Player Name  */}
                  <div className="flex-1 min-w-0 pr-2 sm:pr-4">
                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-white truncate group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                      {player.name}
                    </h3>
                  </div>

                  {/* Score */}
                  <div className="text-right flex-shrink-0 ml-2 sm:ml-4 md:ml-8">
                    <span className="text-lg sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-sm sm:drop-shadow-lg leading-tight block">
                      {player.score.toLocaleString()}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-400 block leading-tight">PTS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 md:h-40 bg-gradient-to-t from-orange-500/5 sm:from-orange-500/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Leaderboard;