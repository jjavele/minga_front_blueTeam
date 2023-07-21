import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from "react";

export default function Main({ children }) {
  return (
    <div className="bg-[url('/src/assets/images/backgroundmanga.png')] h-screen w-full bg-cover lg:bg-[url('/src/assets/images/background.png')] lg:h-[60vh] lg:w-full lg:bg-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
