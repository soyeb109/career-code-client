import React from "react";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);

  if (!user) {
    <Navigate to="sign-in" />;
  }
  return children;
};

export default PrivateRoute;
