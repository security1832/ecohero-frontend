// src/screens/HomeScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to EcoHero</h1>
      <p className="text-gray-800 mb-4">Join the movement for sustainable living!</p>
      <div className="grid grid-cols-1 gap-4">
        <Link to="/feed" className="bg-green-600 text-white p-4 rounded-lg text-center">
          View Community Feed
        </Link>
        <button className="bg-green-600 text-white p-4 rounded-lg">
          Track Carbon Footprint (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;