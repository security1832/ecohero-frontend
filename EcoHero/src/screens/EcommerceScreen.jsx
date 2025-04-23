// src/screens/EcommerceScreen.jsx
import React from 'react';

const products = [
  { id: 1, title: 'Eco-Smartphone', price: 999.99, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Solar Charger', price: 49.99, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Bamboo Laptop', price: 1499.99, image: 'https://via.placeholder.com/150' },
];

const EcommerceScreen = () => {
  const buyProduct = (title) => alert(`Buying ${title}`);
  const viewAR = (title) => alert(`Viewing ${title} in AR`);
  const joinTradeShow = () => alert('Joining virtual trade show');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco-Mega Mall</h2>
      <p className="text-gray-600 mb-4">Shop sustainable products globally!</p>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{product.title}</h3>
            <p className="text-gray-800">${product.price}</p>
            <button
              onClick={() => viewAR(product.title)}
              className="bg-blue-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`View ${product.title} in AR`}
            >
              View in AR
            </button>
            <button
              onClick={() => buyProduct(product.title)}
              className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`Buy ${product.title}`}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={joinTradeShow}
        className="bg-red-600 text-white p-2 rounded mt-4 block text-center"
        aria-label="Join trade show"
      >
        Join Trade Show ($9999)
      </button>
    </div>
  );
};

export default EcommerceScreen;