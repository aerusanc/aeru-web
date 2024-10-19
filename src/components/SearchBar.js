import React from 'react';

const SearchBar = () => {
    return (
      <div className="flex justify-end mb-4"> {/* Mengubah justify-between menjadi justify-end */}
        <div className="relative">
          <input 
            type="text" 
            className="bg-gray-300 rounded-full pl-4 pr-10 py-2" 
            placeholder="Search" 
          />
          <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
        </div>
      </div>
    );
  };
  
export default SearchBar;
