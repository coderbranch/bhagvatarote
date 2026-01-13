import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4" onClick={closeMenu}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/960px-Logo_of_Shiv_Sena.svg.png"
              alt="Shiv Sena Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 leading-tight">
                निशाणी
              </span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 leading-tight">
                धनुष्यबाण
              </span>
            </div>
          </Link>

          {/* Center - Candidate Details (All screens) */}
          <div className="flex flex-col items-center text-center flex-1 mx-4">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
              प्रभाग २६ ड अनु.क्र. १
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
              श्री. भागवत पाराजी आरोटे
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link
              to="/"
              className={`text-sm lg:text-base font-semibold px-3 py-1.5 rounded ${
                location.pathname === '/' 
                  ? 'bg-gradient-to-r from-[#ffcc99] to-[#ffb366] text-gray-900' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/evm-practice"
              className={`text-sm lg:text-base font-semibold px-3 py-1.5 rounded ${
                location.pathname === '/evm-practice' 
                  ? 'bg-gradient-to-r from-[#ffcc99] to-[#ffb366] text-gray-900' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              EVM Practice
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ffb366]"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-4 py-3 text-base font-semibold rounded-lg mb-2 ${
                location.pathname === '/' 
                  ? 'bg-gradient-to-r from-[#ffcc99] to-[#ffb366] text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/evm-practice"
              onClick={closeMenu}
              className={`block px-4 py-3 text-base font-semibold rounded-lg ${
                location.pathname === '/evm-practice' 
                  ? 'bg-gradient-to-r from-[#ffcc99] to-[#ffb366] text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              EVM Practice
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

