import React, { useState } from 'react'; 
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Untuk hamburger menu

  const handleShopMouseEnter = () => setShowShopDropdown(true);
  const handleShopMouseLeave = () => setShowShopDropdown(false);
  const handleNewsMouseEnter = () => setShowNewsDropdown(true);
  const handleNewsMouseLeave = () => setShowNewsDropdown(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu on click

  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-white space-y-4 p-4 md:hidden">

          {/* Dropdown for SHOP */}
          <div 
            className="relative mt-4"
            onClick={() => setShowShopDropdown(!showShopDropdown)}
          >
            <span className="cursor-pointer block">SHOP</span>
            {showShopDropdown && (
              <div className="mt-2 w-48 bg-gray-800 rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Men's</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Women's</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Accessories</a>
              </div>
            )}
          </div>

          {/* Dropdown for NEWS */}
          <div 
            className="relative mt-4"
            onClick={() => setShowNewsDropdown(!showNewsDropdown)}
          >
            <span className="cursor-pointer block">NEWS</span>
            {showNewsDropdown && (
              <div className="mt-2 w-48 bg-gray-800 rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Latest News</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Upcoming Events</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Promotions</a>
              </div>
            )}
          </div>

          {/* Search bar and icons */}
          <div className="relative mt-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white text-black rounded-lg px-3 py-1.5 w-full focus:outline-none" 
            />
            <FaSearch className="absolute top-2 right-3 text-gray-400" />
          </div>
          <div className="flex space-x-4 justify-center mt-4">
            <a href="#" className="text-white">
              <FaShoppingCart className="text-xl" />
            </a>
            <a href="#" className="text-white">
              <FaUserCircle className="text-xl" />
            </a>
          </div>
        </nav>
      )}

      {/* Logo in the Center */}
      <div className="flex justify-center flex-1">
        <img 
        href="/"
          src={`${process.env.PUBLIC_URL}/assets/white.png`} 
          alt="Aeru Studio Logo" 
          className="h-12 w-auto" 
        />
      </div>

      {/* Full Navigation for Desktop */}
      <nav className="hidden md:flex flex-1 space-x-8">
        


        {/* Dropdown for SHOP */}
        <div 
          className="relative inline-block" 
          onMouseEnter={handleShopMouseEnter} 
          onMouseLeave={handleShopMouseLeave}
        >
          <span className="text-white cursor-pointer">SHOP</span>
          {showShopDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Men's</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Women's</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Accessories</a>
            </div>
          )}
        </div>

        {/* Dropdown for NEWS */}
        <div 
          className="relative inline-block" 
          onMouseEnter={handleNewsMouseEnter} 
          onMouseLeave={handleNewsMouseLeave}
        >
          <span className="text-white cursor-pointer">NEWS</span>
          {showNewsDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Latest News</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Upcoming Events</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Promotions</a>
            </div>
          )}
        </div>
      </nav>

      {/* Search bar and icons on the right for Desktop */}
      <div className="hidden md:flex items-center space-x-4 justify-end flex-1">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-white text-black rounded-lg px-3 py-1.5 focus:outline-none" 
          />
          <FaSearch className="absolute top-2 right-3 text-gray-400" />
        </div>
        <a href="#" className="text-white">
          <FaShoppingCart className="text-xl" />
        </a>
        <a href="#" className="text-white">
          <FaUserCircle className="text-xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;
