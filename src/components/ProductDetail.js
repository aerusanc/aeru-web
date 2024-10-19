import React from 'react';

const ProductDetail = () => {
    return (
        <div className="p-8 flex justify-center">
            <div className="flex space-x-8 w-full max-w-6xl"> {/* Kontainer utama */}
                {/* Card untuk Gambar Produk */}
                <div className="flex-none w-1/2 border rounded-lg p-4">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/product.png`} // Ganti URL gambar jika perlu
                        alt="Home Jersey 2024/2025"
                        className="w-[670px] h-[580px] object-cover" // Mengatur dimensi gambar
                    />
                </div>

                
                
                {/* Card untuk Detail Produk */}
                <div className="flex-none w-1/2 flex flex-col space-y-4">
                    <div className="bg-gray-200 p-2 rounded-full inline-block">Best Seller</div>
                    <div className="bg-gray-200 p-4 rounded-lg space-y-4">
                        <div className="text-2xl font-bold">Home Jersey 2024/2025</div>
                        <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div>0 Reviews</div>
                        </div>
                        <div>Select Size</div>
                        <div className="flex space-x-2">
                            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                <button key={size} className="border rounded-full px-4 py-1">{size}</button>
                            ))}
                        </div>
                        <button className="bg-gray-300 px-4 py-2 rounded-full w-full">SHOP NOW</button>
                        <button className="bg-gray-300 p-2 rounded-full w-full flex justify-center items-center">
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <div className="text-xl font-bold">Product Info</div>
                        <p className="mt-2 text-sm">
                            Your Arsenal pride just got cooler. Designed in collaboration with London-based, Italian-inspired streetwear brand Aries, the Arsenal x Aries Bolt T-shirt is the dream t-shirt you've been waiting for. With a '90s-inspired bolt striped design, a heat-applied reflective Aries slogan, retro cannon and Highbury-inspired temple graphics at chest, it will have you turn heads everywhere you go.
                        </p>
                        <ul className="mt-2 text-sm list-disc list-inside">
                            <li>Heat-applied reflective retro cannon and Highbury-inspired temple graphics at chest</li>
                            <li>Heat-applied reflective Aries slogan on the front</li>
                            <li>Tonal bolt stripes pattern</li>
                            <li>Regular, unisex fit</li>
                            <li>For men, we recommend sizing up from your usual Arsenal size</li>
                            <li>Our male model (6' 1") wears a size Large and has a 34.5" chest, 28.5" waist</li>
                            <li>Our female model (5' 9") wears a size Small and has a 32" bust, 28" waist</li>
                        </ul>
                        <p className="mt-2 text-sm">
                            Colour: Red<br />
                            Product code: U06692<br />
                            Material: 100% polyester
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
