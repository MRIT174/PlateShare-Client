import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider.jsx";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
