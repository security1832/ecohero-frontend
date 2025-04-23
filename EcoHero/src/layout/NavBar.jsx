import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const startVoiceNav = () => alert('Voice navigation activated');
  const toggleAccessibility = () => alert('Toggling accessibility mode');

  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          EcoHero
        </Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-white hover:text-green-200" aria-label="Home">Home</Link>
          <Link to="/feed" className="text-white hover:text-green-200" aria-label="Feed">Feed</Link>
          <Link to="/stories" className="text-white hover:text-green-200" aria-label="Stories">Stories</Link>
          <Link to="/live-festivals" className="text-white hover:text-green-200" aria-label="Festivals">Festivals</Link>
          <Link to="/carbon-tracker" className="text-white hover:text-green-200" aria-label="Carbon Tracker">Carbon</Link>
          <Link to="/marketplace" className="text-white hover:text-green-200" aria-label="Marketplace">Market</Link>
          <Link to="/learn" className="text-white hover:text-green-200" aria-label="Learn">Learn</Link>
          <Link to="/eco-world" className="text-white hover:text-green-200" aria-label="Metaverse">Metaverse</Link>
          <Link to="/communities" className="text-white hover:text-green-200" aria-label="Communities">Communities</Link>
          <Link to="/music" className="text-white hover:text-green-200" aria-label="Music">Music</Link>
          <Link to="/ar-vr" className="text-white hover:text-green-200" aria-label="AR/VR">AR/VR</Link>
          <Link to="/gamification" className="text-white hover:text-green-200" aria-label="Gamification">Gamify</Link>
          <Link to="/kids-academy" className="text-white hover:text-green-200" aria-label="Kids Academy">Kids</Link>
          <Link to="/cultural-hub" className="text-white hover:text-green-200" aria-label="Cultural Hub">Culture</Link>
          <Link to="/profile" className="text-white hover:text-green-200" aria-label="Profile">Profile</Link>
          <button
            onClick={startVoiceNav}
            className="text-white hover:text-green-200"
            aria-label="Voice navigation"
          >
            🎙️
          </button>
          <button
            onClick={toggleAccessibility}
            className="text-white hover:text-green-200"
            aria-label="Accessibility mode"
          >
            ♿
          </button>
          {token ? (
            <button onClick={handleLogout} className="text-white hover:text-green-200" aria-label="Logout">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white hover:text-green-200" aria-label="Login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;