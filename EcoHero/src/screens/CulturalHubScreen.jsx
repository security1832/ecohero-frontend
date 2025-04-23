import React from 'react';

const hubs = [
  { id: 1, name: 'Aweer Storytellers', type: 'story' },
  { id: 2, name: 'Maasai Eco-Warriors', type: 'cultural' },
  { id: 3, name: 'Global Eco-Rituals', type: 'ritual' },
];

const CulturalHubScreen = () => {
  const joinHub = (name) => alert(`Joining ${name}`);
  const shareStory = () => alert('Sharing cultural eco-story');
  const nominateHero = () => alert('Nominating local eco-hero');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Cultural Eco-Hubs</h2>
      {hubs.map((hub) => (
        <div key={hub.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{hub.name}</h3>
          <p className="text-gray-800">
            {hub.type === 'story'
              ? 'Storytelling Hub'
              : hub.type === 'cultural'
              ? 'Cultural Hub'
              : 'Ritual Hub'}
          </p>
          <button
            onClick={() => joinHub(hub.name)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Join ${hub.name}`}
          >
            Join Hub (Free)
          </button>
        </div>
      ))}
      <button
        onClick={shareStory}
        className="bg-purple-600 text-white p-2 rounded mt-2"
        aria-label="Share eco-story"
      >
        Share Eco-Story (Free)
      </button>
      <button
        onClick={nominateHero}
        className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Nominate hero"
      >
        Nominate Hero (Free)
      </button>
    </div>
  );
};

export default CulturalHubScreen;