import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUser, FaEnvelope, FaLock, FaImage, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo).then(() => navigate("/"));
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 space-y-6 border shadow-lg bg-white/10 rounded-2xl backdrop-blur-md border-orange-500/30">
        <h2 className="text-3xl font-extrabold text-center text-orange-400">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
              <FaUser className="text-orange-400" />
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 text-white bg-transparent outline-none"
                placeholder="Your name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
              <FaEnvelope className="text-orange-400" />
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 text-white bg-transparent outline-none"
                placeholder="Your email"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Photo URL</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
              <FaImage className="text-orange-400" />
              <input
                type="text"
                name="photo"
                required
                className="w-full p-2 text-white bg-transparent outline-none"
                placeholder="Profile photo URL"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
              <FaLock className="text-orange-400" />
              <input
                type="password"
                name="password"
                required
                className="w-full p-2 text-white bg-transparent outline-none"
                placeholder="Create password"
              />
            </div>
          </div>

          {error && <p className="text-sm text-center text-red-400">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 font-bold text-black transition-all bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleRegister}
          className="flex items-center justify-center w-full gap-2 py-2 mt-2 font-semibold text-white transition-all bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaGoogle className="text-orange-400" /> Register with Google
        </button>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-orange-400 hover:text-orange-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
