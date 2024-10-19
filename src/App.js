import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
    const products = Array(8).fill().map((_, index) => ({
        id: index + 1,
        name: 'Home Jersey 2024/2025',
        price: 500000,
        image: 'https://placehold.co/200x200',
        status: index % 2 === 0 ? 'Sold' : 'New'
    }));

    return (
        <Router>
            <div className="bg-gray-200">
                <Header />
                <main className="p-0">
                    
                    <Routes>
                        <Route path="/" element={<ProductList products={products} />} />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
