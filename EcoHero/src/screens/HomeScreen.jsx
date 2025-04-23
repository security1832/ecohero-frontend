import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const generateTheme = () => alert('Generating AI theme');
  const viewWidget = () => alert('Viewing dynamic widget');
  const referFriend = () => alert('Referring a friend for 100 tokens');
  const toggleOffline = () => alert('Toggling offline mode');

  return (
    <div className="p-4 bg-gray-100 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-50 animate-gradient"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to EcoHero</h1>
        <p className="text-xl text-white mb-8">Join the ultimate sustainability revolution!</p>
        <div className="mb-4">
          <button
            onClick={generateTheme}
            className="bg-purple-600 text-white p-2 rounded mr-2"
            aria-label="Generate AI theme"
          >
            Generate AI Theme
          </button>
          <button
            onClick={viewWidget}
            className="bg-blue-600 text-white p-2 rounded mr-2"
            aria-label="View widgets"
          >
            View Widgets
          </button>
          <button
            onClick={referFriend}
            className="bg-yellow-600 text-white p-2 rounded mr-2"
            aria-label="Refer a friend"
          >
            Refer a Friend
          </button>
          <button
            onClick={toggleOffline}
            className="bg-orange-600 text-white p-2 rounded"
            aria-label="Toggle offline mode"
          >
            Offline Mode
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/feed" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="AI-Curated Feed">
            AI-Curated Feed
          </Link>
          <Link to="/stories" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Eco Stories">
            Eco Stories
          </Link>
          <Link to="/live-festivals" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Live Festivals">
            Live Festivals
          </Link>
          <Link to="/carbon-tracker" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Carbon Tracker">
            Carbon Tracker
          </Link>
          <Link to="/marketplace" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="3D Marketplace">
            3D Marketplace
          </Link>
          <Link to="/learn" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Learning Universe">
            Learning Universe
          </Link>
          <Link to="/eco-world" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Eco Metaverse">
            Eco Metaverse
          </Link>
          <Link to="/communities" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Communities">
            Communities
          </Link>
          <Link to="/music" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Music & Podcasts">
            Music & Podcasts
          </Link>
          <Link to="/ar-vr" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="AR & VR">
            AR & VR
          </Link>
          <Link to="/gamification" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Gamification">
            Gamification
          </Link>
          <Link to="/kids-academy" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Kids Academy">
            Kids Academy
          </Link>
          <Link to="/cultural-hub" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Cultural Hub">
            Cultural Hub
          </Link>
          <Link to="/profile" className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700" aria-label="Your Profile">
            Your Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;