import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="py-10 text-xl text-center">Loading...</div>;
  }

  if (user) {
    return children;
  }

  // Redirect to login page if not logged in
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
