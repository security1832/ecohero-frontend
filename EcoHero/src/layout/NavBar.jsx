import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          EcoHero
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-green-200">
            Home
          </Link>
          <Link to="/feed" className="text-white hover:text-green-200">
            Feed
          </Link>
          <Link to="/carbon-tracker" className="text-white hover:text-green-200">
            Carbon Tracker
          </Link>
          <Link to="/marketplace" className="text-white hover:text-green-200">
            Marketplace
          </Link>
          <Link to="/learn" className="text-white hover:text-green-200">
            Learn
          </Link>
          <Link to="/chat" className="text-white hover:text-green-200">
            Chat
          </Link>
          <Link to="/profile" className="text-white hover:text-green-200">
            Profile
          </Link>
          {token ? (
            <button onClick={handleLogout} className="text-white hover:text-green-200">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white hover:text-green-200">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;