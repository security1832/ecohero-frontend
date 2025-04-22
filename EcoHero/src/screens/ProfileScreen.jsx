// src/screens/ProfileScreen.jsx
import React from 'react';

const user = {
  username: 'EcoUser',
  points: 1500,
  badges: ['Tree Planter', 'Zero Waste'],
  isPro: false,
};

const ProfileScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{user.username}'s Profile</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-gray-800">Points: {user.points}</p>
        <p className="text-gray-800">Badges: {user.badges.join(', ')}</p>
        {user.isPro ? (
          <p className="text-green-600">EcoHero Pro Member</p>
        ) : (
          <button className="bg-green-600 text-white p-2 rounded mt-2">
            Upgrade to Pro ($9.99/month)
          </button>
        )}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-green-700 font-semibold mb-2">Eco Challenges</h3>
        <button className="bg-blue-600 text-white p-2 rounded">
          Join Paid Challenge ($5 entry, win prizes!)
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;