import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  let user = localStorage.getItem("token");
  if (user) return <Navigate to={"/NotAllow"} />;
  return children;
};

export default ProtectedRoute;
