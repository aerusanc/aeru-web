import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../assets/styles.css'; // Pastikan jalur ini sesuai

const products = [
  { id: 1, name: "Home Jersey 24/25", price: 500000, set: "New", category: "Sports" },
  { id: 2, name: "Running Shoes", price: 700000, set: "Best Seller", category: "Sports" },
  { id: 3, name: "Football", price: 300000, set: "New", category: "Sports" },
  { id: 4, name: "Sports Watch", price: 1500000, set: "New", category: "Sports" },
  { id: 5, name: "Basketball", price: 350000, set: "New", category: "Sports" },
  { id: 6, name: "T-Shirt Fashion", price: 250000, set: "New", category: "Fashion" },
  { id: 7, name: "Casual Sneakers", price: 450000, set: "Best Seller", category: "Fashion" },
  { id: 8, name: "Jeans", price: 300000, set: "New", category: "Fashion" },
  { id: 9, name: "Hoodie", price: 500000, set: "New", category: "Fashion" },
  { id: 10, name: "Shirt", price: 400000, set: "Best Seller", category: "Fashion" },
  { id: 11, name: "Away Jersey 24/25", price: 500000, set: "New", category: "Sports" },
  { id: 12, name: "Shoes", price: 700000, set: "Best Seller", category: "Sports" },
  { id: 13, name: "Football Shirt", price: 300000, set: "New", category: "Sports" },
  { id: 14, name: "Sports Watch 1 ", price: 1500000, set: "New", category: "Sports" },
  { id: 15, name: "Basketball v1", price: 350000, set: "New", category: "Sports" },
  { id: 16, name: "T-Shirt Fashion", price: 250000, set: "New", category: "Fashion" },
  { id: 17, name: "Casual Sneakers", price: 450000, set: "Best Seller", category: "Fashion" },
  { id: 18, name: "Suits", price: 300000, set: "New", category: "Fashion" },
  { id: 19, name: "Jacket", price: 500000, set: "New", category: "Fashion" },
  { id: 20, name: "Dress ", price: 400000, set: "Best Seller", category: "Fashion" },
];

const sets = ["New", "Best Seller"];

const ProductList = () => {
  const [selectedSet, setSelectedSet] = useState(sets[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const productsPerSlide = 5;

  const filteredProducts = products.filter(product => product.set === selectedSet);
  const totalSlides = Math.ceil(filteredProducts.length / productsPerSlide);

  const handleNextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="bg-gray-200">
      {/* Banner */}
      <div className="mb-8 overflow-hidden p-0">
        <img
          src={`${process.env.PUBLIC_URL}/assets/banner.jpg`}
          alt="Banner"
          className="w-full h-auto md:h-[720px] object-cover"
        />
        <div className="mb-8 p-4 bg-blue-100 text-center relative">
          <h2 className="text-3xl font-bold mb-4">Check Out Our Latest Collection!</h2>
          <p className="text-lg mb-4">Explore the newest arrivals in sports and fashion.</p>
          <Link to="/products" className="inline-block bg-black text-white py-2 px-4 rounded-md text-lg">
            Shop Now
          </Link>
        </div>
      </div>

      <div className="pl-4 md:pl-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold">
              {sets.map((set) => (
                <button
                  key={set}
                  onClick={() => {
                    setSelectedSet(set);
                    setCurrentSlideIndex(0);
                  }}
                  className={`mx-2 ${selectedSet === set ? 'text-black font-bold' : 'text-gray-700'}`}
                >
                  {set}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button onClick={handlePrevSlide} disabled={currentSlideIndex === 0}>
              <FaArrowLeft className="text-xl mr-2" />
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
              {filteredProducts
                .slice(currentSlideIndex * productsPerSlide, (currentSlideIndex + 1) * productsPerSlide)
                .map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="bg-white rounded-lg shadow-lg p-2 relative w-[180px] md:w-[220px] lg:w-[300px]">
                      <i className="far fa-heart absolute top-2 left-2 text-xl"></i>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product.png`}
                        alt={product.name}
                        className="w-full h-[180px] md:h-[300px] object-cover mb-2"
                      />
                      <div className="text-left">
                        <div className="text-lg font-bold">{product.name}</div>
                        <div className="text-gray-600">Rp. {product.price.toLocaleString()}</div>
                        <div className="text-gray-600">{product.category}</div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <button onClick={handleNextSlide} disabled={currentSlideIndex >= totalSlides - 1}>
              <FaArrowRight className="text-xl ml-2" />
            </button>
          </div>
        </div>

        {/* Special Products, Latest News, and Credits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-16">
          {/* Special Products */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Special Products</h3>
            <img
              src={`${process.env.PUBLIC_URL}/assets/card1.jpg`}
              alt="Special Product"
              className="w-full h-[200px] object-cover mb-4"
            />
            <p className="text-gray-600 mb-4">
              Discover exclusive deals and limited edition products, available for a limited time.
            </p>
            <Link to="/special-products" className="inline-block bg-black text-white py-2 px-4 rounded-md">
              Explore Now
            </Link>
          </div>

          {/* Latest News */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Latest News</h3>
            <img
              src={`${process.env.PUBLIC_URL}/assets/card1.jpg`}
              alt="Latest News"
              className="w-full h-[200px] object-cover mb-4"
            />
            <p className="text-gray-600 mb-4">
              Stay updated with the latest news in fashion and sports. Read our exclusive articles.
            </p>
            <Link to="/news" className="inline-block bg-black text-white py-2 px-4 rounded-md">
              Read More
            </Link>
          </div>

          {/* Credits */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Credits</h3>
            <img
              src={`${process.env.PUBLIC_URL}/assets/card1.jpg`}
              alt="Credits"
              className="w-full h-[200px] object-cover mb-4"
            />
            <p className="text-gray-600 mb-4">
              Shop with confidence! Use your available credits and get discounts on your next purchase.
            </p>
            <Link to="/credits" className="inline-block bg-black text-white py-2 px-4 rounded-md">
              Use Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
