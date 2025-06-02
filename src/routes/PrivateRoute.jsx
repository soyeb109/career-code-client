import React from "react";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to="sign-in" state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;
