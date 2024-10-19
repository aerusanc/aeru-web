import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white p-4 rounded shadow-md mt-6 w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200 py-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold mt-4">Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
