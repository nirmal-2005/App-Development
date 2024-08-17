import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Repair Shops
        </Link>
        <div className="hidden sm:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-700 rounded-md px-3 py-2"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-white hover:bg-blue-700 rounded-md px-3 py-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white hover:bg-blue-700 rounded-md px-3 py-2"
          >
            Register
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white sm:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-white hover:bg-blue-700 rounded-md px-3 py-2"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
