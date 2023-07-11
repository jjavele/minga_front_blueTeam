import React from "react";
import { Navigate } from "react-router-dom";
import NotAllow from "../pages/NotAllow";

const ProtectionWhenLogged = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  let role = user?.role

  if (!role) return <Navigate to={"/NotAllow"} />;
  return children
   
};

export default ProtectionWhenLogged;