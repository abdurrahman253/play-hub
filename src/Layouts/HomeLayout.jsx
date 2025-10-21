import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Navbar Section */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Page Content */}
      <main className="flex-grow w-11/12 py-6 mx-auto md:py-10">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
