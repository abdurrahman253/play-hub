import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 font-semibold duration-300 ${
            isActive ? "text-orange-500" : "text-gray-200 hover:text-orange-500"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/games"
        className={({ isActive }) =>
          `px-4 py-2 font-semibold duration-300 ${
            isActive ? "text-orange-500" : "text-gray-200 hover:text-orange-500"
          }`
        }
      >
        Games
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 font-semibold duration-300 ${
            isActive ? "text-orange-500" : "text-gray-200 hover:text-orange-500"
          }`
        }
      >
        About
      </NavLink>
    </>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b shadow-md bg-gradient-to-r from-black via-gray-900 to-black border-orange-500/30"
    >
      <div className="flex items-center justify-between w-11/12 py-3 mx-auto">
        {/*  Left - Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-orange-500 rounded-lg">
            <span className="text-2xl font-extrabold text-white">P</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-widest text-white">
            Play<span className="text-orange-500">Hub</span>
          </h1>
        </Link>

        {/* ✅ Center - Links + Buttons (Desktop) */}
        <div className="items-center hidden gap-3 md:flex">
          {navLinks}
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 font-bold text-black duration-300 bg-orange-500 rounded-lg hover:bg-orange-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-orange-400 duration-300 bg-gray-800 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative cursor-pointer group">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/Yt9Y6H9/default-avatar.png"
                }
                alt="profile"
                onClick={() => navigate("/profile")}
                className="w-10 h-10 duration-300 border-2 border-orange-500 rounded-full hover:scale-110"
              />
              <div className="absolute right-0 hidden p-3 mt-2 text-white bg-gray-900 rounded-lg shadow-lg group-hover:block">
                <p className="text-sm">{user.displayName}</p>
                <button
                  onClick={logOut}
                  className="w-full mt-2 text-left text-orange-400 hover:text-orange-600"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center w-full gap-2 pb-4 bg-gray-900 md:hidden">
          {navLinks}
          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-11/12 px-4 py-2 font-bold text-center text-black bg-orange-500 rounded-lg hover:bg-orange-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-11/12 px-4 py-2 text-center text-orange-400 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/Yt9Y6H9/default-avatar.png"
                }
                alt="profile"
                className="w-10 h-10 border-2 border-orange-500 rounded-full"
              />
              <p className="text-white">{user.displayName}</p>
              <button
                onClick={() => {
                  logOut();
                  setIsOpen(false);
                }}
                className="text-orange-400 hover:text-orange-600"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
