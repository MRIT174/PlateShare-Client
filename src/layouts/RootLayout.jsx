import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"; // your navbar
import Footer from "../components/Footer.jsx"; // optional footer

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* This renders child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout; // ✅ default export
