import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <img
        src={user?.photoURL || "https://i.ibb.co/YW0b3yT/default-avatar.png"}
        alt="User"
        className="mb-4 rounded-full w-28 h-28"
      />
      <h2 className="mb-2 text-2xl font-semibold">{user?.displayName || "Anonymous User"}</h2>
      <p className="mb-6 text-gray-600">{user?.email}</p>

      <Link to="/update-profile">
        <button className="px-5 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Update Information
        </button>
      </Link>
    </div>
  );
};

export default Profile;
