// src/screens/MusicScreen.jsx
import React from 'react';

const playlists = [
  { id: 1, title: 'Eco Chill Vibes', type: 'music' },
  { id: 2, title: 'Sustainability Talks', type: 'podcast' },
];

const MusicScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Music & Podcasts</h2>
      {playlists.map((item) => (
        <div key={item.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{item.title}</h3>
          <p className="text-gray-800">{item.type === 'music' ? 'Music Playlist' : 'Podcast Series'}</p>
          <button className="bg-green-600 text-white p-2 rounded mt-2">
            Play Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default MusicScreen;