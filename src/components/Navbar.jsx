import React from "react";
import { Link } from "react-router-dom";import { useEffect, useState } from "react";

/*const Navbar = () => {
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="w-full bg-background dark:bg-gray-900 text-white fixed top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-primary text-2xl font-bold">Ankit.dev</h1>
        <div className="flex gap-6 items-center">
          
          <button
            onClick={() => setDark(!dark)}
            className="text-sm text-accent border border-accent px-2 py-1 rounded"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
*/


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
