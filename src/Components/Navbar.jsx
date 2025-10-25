import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logOut();
    setShowDropdown(false);
    navigate("/");
  };

  const navLinks = (
    <>
      <NavLink
        to="/#top"
        className={({ isActive }) =>
          `px-4 py-2 font-semibold duration-300 rounded-lg ${
            window.location.pathname === "/" && window.location.hash === ""
              ? "text-orange-400 bg-orange-500/10"
              : "text-gray-200 hover:text-orange-400 hover:bg-white/5"
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>

      <NavLink
        to="/#popular-games-section"
        className={() =>
          `px-4 py-2 font-semibold duration-300 rounded-lg ${
            window.location.pathname === "/" &&
            window.location.hash === "#popular-games-section"
              ? "text-orange-400 bg-orange-500/10"
              : "text-gray-200 hover:text-orange-400 hover:bg-white/5"
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Games
      </NavLink>

      <NavLink
        to="/#newsletter-section"
        className={() =>
          `px-4 py-2 font-semibold duration-300 rounded-lg ${
            window.location.pathname === "/" &&
            window.location.hash === "#newsletter-section"
              ? "text-orange-400 bg-orange-500/10"
              : "text-gray-200 hover:text-orange-400 hover:bg-white/5"
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Subscribe
      </NavLink>

     
      {user && (
        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            `px-4 py-2 font-semibold duration-300 rounded-lg ${
              isActive
                ? "text-orange-400 bg-orange-500/10"
                : "text-gray-200 hover:text-orange-400 hover:bg-white/5"
            }`
          }
          onClick={() => setIsOpen(false)}
        >
          Leaderboard
        </NavLink>
      )}
    </>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b shadow-lg backdrop-blur-xl bg-black/40 border-white/10"
    >
      <div className="flex items-center justify-between w-11/12 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src="https://gameplexnext.softivuslab.com/_next/static/media/favicon.395cfa38.png"
            alt="PlayHub Logo"
            className="w-10 h-10 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
          />
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            Play<span className="text-orange-400">Hub</span>
          </h1>
        </Link>

        {/*  Desktop Navigation */}
        <div className="items-center hidden gap-2 md:flex">
          {navLinks}

          {!user ? (
            <div className="flex gap-2 ml-4">
              <Link
                to="/auth/login"
                className="px-5 py-2 font-semibold text-white duration-300 border rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-5 py-2 font-semibold text-white duration-300 rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/50"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative ml-4">
              {/*  Profile Avatar */}
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="focus:outline-none group"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 duration-300 border-2 rounded-full shadow-lg border-orange-400/50 group-hover:border-orange-400 group-hover:scale-110"
                  />
                ) : (
                  <FaUserCircle
                    className="text-orange-400 transition-transform group-hover:scale-110"
                    size={40}
                  />
                )}
              </button>

              {/*  Dropdown Menu */}
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 z-50 w-64 mt-3 overflow-hidden border shadow-2xl backdrop-blur-xl bg-black/60 rounded-2xl border-white/10"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div className="flex flex-col items-center px-6 py-6 text-center bg-gradient-to-b from-orange-500/10 to-transparent">
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/Yt9Y6H9/default-avatar.png"
                      }
                      alt="profile"
                      className="w-20 h-20 mb-3 border-2 rounded-full shadow-lg border-orange-400/50"
                    />
                    <p className="text-base font-semibold text-white">
                      {user.displayName || "Anonymous Player"}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">{user.email}</p>
                  </div>

                  <div className="flex flex-col p-2">
                    <button
                      onClick={() => {
                        navigate("/update-profile");
                        setShowDropdown(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-left text-gray-300 duration-200 rounded-lg hover:text-white hover:bg-white/10"
                    >
                      <span>⚙️</span>
                      <span className="font-medium">Update Profile</span>
                    </button>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 text-left text-orange-400 duration-200 rounded-lg hover:text-white hover:bg-red-500/20"
                    >
                      <span>🚪</span>
                      <span className="font-medium">Log Out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>

        {/*  Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white transition-transform md:hidden hover:scale-110"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center w-full gap-3 pt-2 pb-6 border-t backdrop-blur-xl bg-black/60 md:hidden border-white/10"
        >
          {navLinks}

          {!user ? (
            <div className="flex flex-col w-11/12 gap-2 mt-2">
              <Link
                to="/auth/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 font-semibold text-center text-white border rounded-lg bg-white/10 hover:bg-white/20 border-white/20"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 font-semibold text-center text-white rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center w-11/12 gap-3 mt-4">
              <div className="flex flex-col items-center w-full gap-2 p-4 rounded-xl bg-white/5">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/Yt9Y6H9/default-avatar.png"
                  }
                  alt="profile"
                  className="w-16 h-16 border-2 rounded-full shadow-lg border-orange-400/50"
                />
                <p className="font-semibold text-white">
                  {user.displayName || "Anonymous"}
                </p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
              <button
                onClick={() => {
                  navigate("/update-profile");
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 font-medium text-center text-white border rounded-lg bg-white/10 hover:bg-white/20 border-white/20"
              >
                ⚙️ Update Profile
              </button>
              <button
                onClick={() => {
                  logOut();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 font-medium text-center text-orange-400 border rounded-lg bg-red-500/10 hover:bg-red-500/20 border-red-500/30"
              >
                🚪 Log Out
              </button>
            </div>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
