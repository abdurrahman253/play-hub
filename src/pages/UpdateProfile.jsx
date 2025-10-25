import { useState, useContext, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaSpinner, FaUserCircle } from "react-icons/fa";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Validate URL
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!name.trim()) {
      setError("Player Name is required!");
      return;
    }
    if (photoURL && !isValidUrl(photoURL)) {
      setError("Please enter a valid Photo URL!");
      return;
    }

    setIsUpdating(true);

    updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
      .then(() => {
        setSuccess("Profile updated successfully!");
        setTimeout(() => navigate("/profile"), 1000);
      })
      .catch((error) => {
        console.error(error);
        setError(`Update Failed: ${error.message}`);
      })
      .finally(() => setIsUpdating(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="w-full max-w-lg p-8 bg-gray-800/80 border border-orange-500/20 rounded-2xl shadow-2xl shadow-orange-500/20 backdrop-blur-lg transform transition-all duration-500">
        {/* Header */}
        <h2 className="mb-8 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-pulse">
          PLAYER CONFIG
        </h2>

        {/* Profile Image Preview */}
        <div className="flex justify-center mb-8">
          {photoURL && isValidUrl(photoURL) ? (
            <img
              src={photoURL}
              alt="Avatar Preview"
              className="w-28 h-28 rounded-full border-4 border-orange-500 shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setPhotoURL("")} 
            />
          ) : (
            <FaUserCircle
              size={112}
              className="text-orange-500/70 transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Player Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your Player Name"
              className="w-full p-4 text-white bg-gray-900/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500/80 transition-all duration-300 placeholder-gray-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Avatar URL
            </label>
            <input
              id="photoURL"
              type="url"
              placeholder="Enter Avatar URL (optional)"
              className="w-full p-4 text-white bg-gray-900/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500/80 transition-all duration-300 placeholder-gray-500"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          {/* Error/Success Messages */}
          {error && (
            <p
              className="text-sm text-center text-red-400 animate-fade-in"
              role="alert"
            >
              {error}
            </p>
          )}
          {success && (
            <p
              className="text-sm text-center text-green-400 animate-fade-in"
              role="status"
            >
              {success}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isUpdating}
            className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-lg shadow-lg hover:from-orange-700 hover:to-red-700 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            aria-label={isUpdating ? "Updating profile" : "Update profile"}
          >
            {isUpdating ? (
              <>
                <FaSpinner className="mr-2 animate-spin" /> SAVING...
              </>
            ) : (
              "UPDATE STATS"
            )}
          </button>

          {/* Progress Bar for Loading */}
          {isUpdating && (
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 animate-progress"></div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;