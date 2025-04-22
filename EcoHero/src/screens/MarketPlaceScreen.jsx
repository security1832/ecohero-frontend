// src/screens/MarketplaceScreen.jsx
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Reusable Water Bottle',
    price: 19.99,
    affiliateLink: 'https://example.com/bottle',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Second-Hand Jacket',
    price: 29.99,
    seller: 'EcoUser123',
    image: 'https://via.placeholder.com/150',
  },
];

const MarketplaceScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Marketplace</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{product.name}</h3>
            <p className="text-gray-800">${product.price}</p>
            {product.seller && <p className="text-gray-500 text-sm">Sold by: {product.seller}</p>}
            <a
              href={product.affiliateLink || '#'}
              className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceScreen;