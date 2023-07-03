import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <div className="bg-[url('/src/assets/images/backgroundmanga.png')] h-screen w-full bg-cover lg:bg-[url('/src/assets/images/background.png')] lg:h-[60vh] lg:w-full lg:bg-center">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
