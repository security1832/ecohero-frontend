// src/screens/EcoWorldScreen.jsx
import React from 'react';

const EcoWorldScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">EcoHero World</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Eco World"
          className="w-full h-48 object-cover rounded-lg"
        />
        <p className="text-gray-800 mt-2">
          Welcome to your virtual eco-world! Plant trees, build sustainable cities, and compete with friends.
        </p>
        <button className="bg-green-600 text-white p-2 rounded mt-2">
          Plant a Virtual Tree (100 Eco-Points)
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-green-700 font-semibold">Leaderboard</h3>
        <p className="text-gray-800">1. EcoStar - 5000 Points</p>
        <p className="text-gray-800">2. GreenVibes - 4500 Points</p>
      </div>
    </div>
  );
};

export default EcoWorldScreen;