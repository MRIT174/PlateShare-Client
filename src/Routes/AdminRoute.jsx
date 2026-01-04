import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (user && user.email === "abcmrs174@gmail.com") {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default AdminRoute;
