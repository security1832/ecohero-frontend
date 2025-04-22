import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to EcoHero</h1>
      <p className="text-gray-800 mb-4">Join the ultimate sustainability movement!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/feed" className="bg-green-600 text-white p-4 rounded-lg text-center">Community Feed</Link>
        <Link to="/stories" className="bg-green-600 text-white p-4 rounded-lg text-center">Eco Stories</Link>
        <Link to="/carbon-tracker" className="bg-green-600 text-white p-4 rounded-lg text-center">Track Carbon Footprint</Link>
        <Link to="/marketplace" className="bg-green-600 text-white p-4 rounded-lg text-center">Shop Eco Products</Link>
        <Link to="/learn" className="bg-green-600 text-white p-4 rounded-lg text-center">Learn Sustainability</Link>
        <Link to="/music" className="bg-green-600 text-white p-4 rounded-lg text-center">Music & Podcasts</Link>
        <Link to="/chat" className="bg-green-600 text-white p-4 rounded-lg text-center">Community Chat</Link>
        <Link to="/eco-world" className="bg-green-600 text-white p-4 rounded-lg text-center">Eco World</Link>
        <Link to="/profile" className="bg-green-600 text-white p-4 rounded-lg text-center">Your Profile</Link>
      </div>
    </div>
  );
};

export default HomeScreen;