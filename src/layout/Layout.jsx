import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
