import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; 
import app from "../Firebase/Firebase.config"; 
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const ForgetPassword = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth(app); 
  const [email, setEmail] = useState(user?.email || ""); 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("⚠ Please enter your email address.");
      return;
    }
    setIsSubmitting(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(
        "✅ Password reset email has been sent! Check your inbox or spam folder."
      );
    } catch (err) {
      setError("❌ " + err.message);
    } finally {
    setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-b from-black via-gray-950 to-black
    ">
      <div className="w-full max-w-md p-8 space-y-6 border shadow-xl bg-white/10 rounded-2xl backdrop-blur-md border-orange-500/30">
        <h2 className="text-3xl font-extrabold text-center text-orange-400">
          Reset Your Password 🔒
        </h2>
        <p className="text-sm text-center text-gray-400">
          Enter your account email and we'll send you a reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              className="w-full p-3 text-white bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {message && (
            <p className="p-2 text-sm text-center text-green-400 rounded-lg bg-green-900/30">
              {message}
            </p>
          )}
          {error && (
            <p className="p-2 text-sm text-center text-red-400 rounded-lg bg-red-900/30">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting} 
            className="w-full py-2 font-bold text-black transition-all duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-[1.02] flex items-center justify-center"
          >
           {isSubmitting ? <FaSpinner className="animate-spin" /> : "Send Reset Link"}
         </button>
        </form>

        <p className="text-center text-gray-400">
          Remembered your password?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-orange-400 hover:text-orange-500"
          >
            Go back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
