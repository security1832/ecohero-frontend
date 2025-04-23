// src/screens/EsportsScreen.jsx
import React from 'react';

const matches = [
  { id: 1, title: 'Eco-Battle Royale', prize: 1000000, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Green Racing League', prize: 500000, image: 'https://via.placeholder.com/150' },
];

const EsportsScreen = () => {
  const joinMatch = (title) => alert(`Joining ${title} ($9.99)`);
  const playMatch = () => alert('Playing match ($0.99)');
  const joinLeague = () => alert('Joining pro league ($99.99/month)');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco-Esports Arena</h2>
      <p className="text-gray-600 mb-4">Compete in global tournaments!</p>
      <div className="grid grid-cols-2 gap-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={match.image} alt={match.title} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{match.title}</h3>
            <p className="text-gray-800">Prize: ${match.prize}</p>
            <button
              onClick={() => joinMatch(match.title)}
              className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`Join ${match.title}`}
            >
              Join Tournament ($9.99)
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={playMatch}
        className="bg-purple-600 text-white p-2 rounded mt-2"
        aria-label="Play match"
      >
        Play Match ($0.99)
      </button>
      <button
        onClick={joinLeague}
        className="bg-blue-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Join league"
      >
        Join League ($99.99)
      </button>
    </div>
  );
};

export default EsportsScreen;