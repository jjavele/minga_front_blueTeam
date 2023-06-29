import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import React from "react";

export default function Main({ children }) {
  return (
    <div className="bg-[url('/src/assets/images/backgroundmanga.png')] h-screen w-full bg-cover">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
