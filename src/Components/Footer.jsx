import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-16 border-t border-orange-500/30 bg-gradient-to-r from-black via-gray-900 to-black text-gray-300"
    >
      {/* ✅ Main Footer Section */}
      <div className="grid w-11/12 grid-cols-1 gap-10 py-10 mx-auto md:grid-cols-3">
        {/* 🎮 Left: Logo + About */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div className="p-2 bg-orange-500 rounded-lg">
              <span className="text-2xl font-extrabold text-white">P</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-widest text-white">
              Play<span className="text-orange-500">Hub</span>
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            PlayHub is your ultimate destination for the best online games.
            Discover, play, and connect with gamers from around the world.
          </p>
        </div>

        {/* 🧭 Center: Navigation Links */}
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h2 className="mb-2 text-lg font-semibold text-orange-500 uppercase">
            Explore
          </h2>
          <Link
            to="/"
            className="duration-300 hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            to="/games"
            className="duration-300 hover:text-orange-400"
          >
            Games
          </Link>
          <Link
            to="/about"
            className="duration-300 hover:text-orange-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="duration-300 hover:text-orange-400"
          >
            Contact
          </Link>
        </div>

        {/* 🌐 Right: Social Media */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center md:items-end md:text-right">
          <h2 className="mb-2 text-lg font-semibold text-orange-500 uppercase">
            Follow Us
          </h2>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            <a
              href="#"
              className="p-2 duration-300 border rounded-full border-orange-500/40 hover:bg-orange-500 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 duration-300 border rounded-full border-orange-500/40 hover:bg-orange-500 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 duration-300 border rounded-full border-orange-500/40 hover:bg-orange-500 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 duration-300 border rounded-full border-orange-500/40 hover:bg-orange-500 hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="py-4 text-sm text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500 font-semibold">PlayHub</span>. All
        rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
