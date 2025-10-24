import { useState, useContext } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
      .then(() => {
        alert("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleUpdate} className="p-8 bg-gray-100 rounded-xl w-80">
        <h2 className="mb-4 text-2xl font-semibold text-center">Update Profile</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Photo URL"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
