import React, { useState } from 'react';
import { FaGamepad, FaEnvelope, FaUser, FaBolt } from 'react-icons/fa';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
        setName('');
      }, 3000);
    }
  };

  return (
    <section className="relative w-11/12 mx-auto my-20 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,165,0,0.3)] backdrop-blur-xl">
        
        {/* Gaming Icon with Animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl animate-ping"></div>
            <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-5 rounded-full shadow-[0_0_30px_rgba(255,165,0,0.5)]">
              <FaGamepad className="text-white text-4xl animate-bounce" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(255,165,0,0.5)] mb-3">
            LEVEL UP YOUR INBOX
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get exclusive game updates, early access codes, epic tournaments, and insider news delivered straight to your battlefield!
          </p>
        </div>

        {/* Success Message */}
        {isSubscribed && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-center">
            <p className="text-green-400 font-bold flex items-center justify-center gap-2">
              <FaBolt className="text-yellow-400" />
              Victory! You're now part of the elite squad! 🎮
            </p>
          </div>
        )}

        {/* Input Section */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name Input */}
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 text-lg z-10" />
              <input
                type="text"
                placeholder="Enter your gamer name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_20px_rgba(255,165,0,0.3)] transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 text-lg z-10" />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_20px_rgba(255,165,0,0.3)] transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,165,0,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-3">
              <FaBolt className="group-hover:rotate-12 transition-transform duration-300" />
              JOIN THE ARENA NOW
              <FaBolt className="group-hover:-rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>Unsubscribe anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>10K+ Gamers joined</span>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-orange-500/50 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-orange-500/50 rounded-br-3xl"></div>
      </div>
    </section>
  );
};

export default NewsLetter;