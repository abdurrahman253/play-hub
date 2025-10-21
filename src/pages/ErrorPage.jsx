import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Error Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-10 text-center">
        {/* Animated Error Image */}
        <motion.img
          src="https://i.ibb.co/W2VqR0x/404-gaming.png" // ⚡ You can replace with your own gaming-style 404 image
          alt="Error 404"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg mb-8 drop-shadow-[0_0_15px_#ff6600]"
        />

        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-orange-500 drop-shadow-[0_0_10px_#ff6600]"
        >
          Oops! Game Over
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-3 text-base text-gray-300 md:text-lg"
        >
          Looks like this level (page) doesn’t exist.
        </motion.p>

        <p className="mb-6 text-sm text-gray-500 md:text-base">
          {error?.statusText || error?.message || "Try restarting your mission!"}
        </p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="px-8 py-3 font-bold transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-orange-600 to-orange-400 hover:shadow-orange-500/50"
          >
            🎮 Back to Home
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
