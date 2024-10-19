import React from 'react';
import '../assets/styles.css'; // Pastikan jalur ini sesuai

const SearchBar = () => {
  return (
    <div className="flex justify-end mb-4">
      <div className="relative w-full max-w-xs"> {/* Tambahkan max-w-xs untuk ukuran maksimum */}
        <input 
          type="text" 
          className="bg-gray-300 rounded-full pl-4 pr-10 py-2 w-full" // Tambahkan w-full untuk responsivitas
          placeholder="Search" 
        />
        <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
      </div>
    </div>
  );
};

export default SearchBar;
