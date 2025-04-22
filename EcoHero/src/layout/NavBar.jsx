import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;