import React from "react";
import Navbar from "../components/navbar";

import Signin from "../components/Signin";
import SigninI from "../components/SigninI";

export default function Login() {
  return (
    <>
      <Navbar />
      <SigninI />
      <Signin />
    </>
  );
}
