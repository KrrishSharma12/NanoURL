import React from "react";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md px-4 py-2 flex justify-between items-center  border-b">
      {/* Left side - Logo / Text with link to home */}
      <div className="text-2xl font-bold">
        URLShortner
      </div>

      {/* Right side - Login Button */}
      <div>
        <Link to="/auth">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
