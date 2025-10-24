import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => navigate(from, { replace: true }))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 space-y-6 border shadow-lg bg-white/10 rounded-2xl backdrop-blur-md border-orange-500/30">
        <h2 className="text-3xl font-extrabold text-center text-orange-400">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
              <FaEnvelope className="text-orange-400" />
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 text-white bg-transparent outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
              <FaLock className="text-orange-400" />
              <input
                type="password"
                name="password"
                required
                className="w-full p-2 text-white bg-transparent outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-center text-red-400">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 font-bold text-black transition-all bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full gap-2 py-2 mt-2 font-semibold text-white transition-all bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <FaGoogle className="text-orange-400" /> Login with Google
        </button>

        <p className="text-center text-gray-400">
          New here?{" "}
          <Link
            to="/register"
            className="font-semibold text-orange-400 hover:text-orange-500"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
