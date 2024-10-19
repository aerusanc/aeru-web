import React, { useState } from 'react'; 
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);

  const handleShopMouseEnter = () => setShowShopDropdown(true);
  const handleShopMouseLeave = () => setShowShopDropdown(false);
  const handleNewsMouseEnter = () => setShowNewsDropdown(true);
  const handleNewsMouseLeave = () => setShowNewsDropdown(false);

  return (
    <header className="bg-black text-white p-4 flex items-center">
      <nav className="flex-1 space-x-8">
        <a href="/" className="text-white">HOME</a>
        
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
      
      {/* Logo in the Center */}
      <div className="flex justify-center flex-1">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/white.png`} 
          alt="Aeru Studio Logo" 
          className="h-12 w-auto mt-4" 
        />
      </div>
      
      {/* Search bar and icons on the right */}
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <div className="relative ">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-white text-black rounded-lg px-3 py-1.5 focus:outline-none" 
          />
          <FaSearch className="absolute top-1 right-2 text-gray-400 top-2.5"  />
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
