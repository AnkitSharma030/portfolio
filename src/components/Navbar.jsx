import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="w-full bg-[#0f172a] text-white shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-primary text-2xl font-bold">Ankit.dev</h1>
        <div className="space-x-6 text-sm font-semibold">
          <Link to="/" className="hover:text-accent transition">Home</Link>
          <Link to="/about" className="hover:text-accent transition">About</Link>
          <Link to="/projects" className="hover:text-accent transition">Projects</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
