import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 px-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg sm:text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            REC PAPER
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-300">
              Guest Login
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block py-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
