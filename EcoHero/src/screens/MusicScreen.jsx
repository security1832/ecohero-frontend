import React from 'react';

const playlists = [
  { id: 1, title: 'Eco Chill Vibes', type: 'music', isAI: true },
  { id: 2, title: 'Sustainability Talks', type: 'podcast', creator: 'EcoStar', revenueShare: true },
  { id: 3, title: 'Eco DJ Night', type: 'live', creator: 'DJ Green', ticket: 9.99 },
  { id: 4, title: 'Forest ASMR', type: 'asmr', creator: 'NatureLover', ticket: 0 },
  { id: 5, title: 'Global Eco-Orchestra', type: 'music', creator: 'AI', ticket: 0 },
];

const MusicScreen = () => {
  const playContent = (title) => alert(`Playing ${title}`);
  const composeMusic = () => alert('Composing AI-generated eco-orchestra');
  const createPSA = () => alert('Recording eco-PSA');
  const recordPodcast = () => alert('Recording in AI podcast studio');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Music & Podcasts</h2>
      {playlists.map((item) => (
        <div key={item.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{item.title}</h3>
          <p className="text-gray-800">
            {item.type === 'music'
              ? 'AI-Generated Playlist'
              : item.type === 'podcast'
              ? `Podcast by ${item.creator}`
              : item.type === 'live'
              ? `Live by ${item.creator}`
              : item.type === 'radio'
              ? '24/7 Eco-Radio'
              : 'Nature ASMR'}
          </p>
          {item.revenueShare && <p className="text-green-600">50% Revenue Share</p>}
          {item.ticket > 0 && <p className="text-green-600">Ticket: ${item.ticket}</p>}
          <button
            onClick={() => playContent(item.title)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Play ${item.title}`}
          >
            Play Now
          </button>
        </div>
      ))}
      <button
        onClick={composeMusic}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Compose orchestra"
      >
        Compose Orchestra (Free)
      </button>
      <button
        onClick={createPSA}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Create PSA"
      >
        Record PSA (Free)
      </button>
      <button
        onClick={recordPodcast}
        className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Record podcast"
      >
        Podcast Studio (Free)
      </button>
    </div>
  );
};

export default MusicScreen;