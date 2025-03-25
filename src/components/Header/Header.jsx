import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-100 text-green-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <div className="text-2xl font-bold">Animal Welfare</div>

    
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-600 font-medium">Home</Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-green-600 font-medium"
            >
              Resources
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
                <Link to="/adopt-a-pet" className="block px-4 py-2 hover:bg-gray-200">Adopt a Pet</Link>
                <Link to="/injured-animal" className="block px-4 py-2 hover:bg-gray-200">Injured Animal</Link>
                <Link to="/resources" className="block px-4 py-2 hover:bg-gray-200">Resources</Link>
              </div>
            )}
          </div>
          <Link to="/animal" className="hover:text-green-600 font-medium">Animals</Link>
          <Link to="/about" className="hover:text-green-600 font-medium">About Us</Link>
          <Link to="/contact" className="hover:text-green-600 font-medium">Contact Us</Link>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded">
              Signup
            </button>
          </Link>
        </div>


        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-green-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-green-50 p-4">
          <Link to="/" className="block py-2 hover:text-green-600">Home</Link>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex justify-between items-center w-full py-2 hover:text-green-600"
          >
            Resources
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="pl-4">
              <Link to="/adopt-a-pet" className="block py-2 hover:bg-green-200">Adopt a Pet</Link>
              <Link to="/injured-animal" className="block py-2 hover:bg-green-200">Injured Animal</Link>
              <Link to="/resources" className="block py-2 hover:bg-green-200">Resources</Link>
            </div>
          )}
          <Link to="/animal" className="block py-2 hover:text-green-600">Animals</Link>
          <Link to="/about" className="block py-2 hover:text-green-600">About Us</Link>
          <Link to="/contact" className="block py-2 hover:text-green-600">Contact Us</Link>
          <div className="flex space-x-4 mt-4">
            <Link to="/login">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded w-full">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
