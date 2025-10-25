import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle, FaLock, FaEnvelope, FaSpinner } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  //  Handle Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    setIsEmailLoading(true)
    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
    setIsEmailLoading(false);
   }
  };

  //  Handle Google Login
  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
    setIsGoogleLoading(false); // STOP LOADING
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="w-full max-w-md p-8 space-y-6 border shadow-xl bg-white/10 rounded-2xl backdrop-blur-md border-orange-500/30">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-orange-400">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-center text-gray-400">
          Log in to continue your gaming journey
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg focus-within:ring-2 focus-within:ring-orange-500">
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

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg focus-within:ring-2 focus-within:ring-orange-500">
              <FaLock className="text-orange-400" />
              <input
                type="password"
                name="password"
                required
                className="w-full p-2 text-white bg-transparent outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <div className="mt-2 text-right">
              <Link
                to="/forget-password"
                className="text-sm text-orange-400 hover:text-orange-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="py-2 text-sm text-center text-red-400 rounded-md bg-red-950/30">
              ⚠ {error}
            </p>
          )}

          {/* Login Button */}
          <button
           type="submit"
           disabled={isEmailLoading}
           className="w-full flex items-center justify-center py-2 font-bold text-black transition-all duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-[1.02]"
          >
           {isEmailLoading ? <FaSpinner className="animate-spin" /> : "Login"}
         </button>

        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={isGoogleLoading}
          className="flex items-center justify-center w-full gap-2 py-2 mt-3 font-semibold text-white transition-all duration-300 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          {isGoogleLoading ? <FaSpinner className="animate-spin" /> : (
            <>
              <FaGoogle className="text-orange-400" /> Continue with Google
            </>
          )}
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-400">
          New here?{" "}
          <Link
            to="/auth/register"
            className="font-semibold text-orange-400 hover:text-orange-500"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
