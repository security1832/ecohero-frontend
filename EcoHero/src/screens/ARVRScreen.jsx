import React from 'react';

const experiences = [
  { id: 1, title: 'AR Ocean Cleanup Hunt', type: 'ar', reward: '100 Tokens' },
  { id: 2, title: 'VR Coral Reef Meditation', type: 'vr', cost: 0 },
  { id: 3, title: 'AR Eco-Hologram', type: 'ar', cost: 0 },
  { id: 4, title: 'VR Eco-Sanctuary', type: 'vr', cost: 0 },
  { id: 5, title: 'VR Policy Simulator', type: 'vr', cost: 0 },
];

const ARVRScreen = () => {
  const startExperience = (title) => alert(`Starting ${title}`);
  const scanPortal = () => alert('Scanning AR metaverse portal');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">AR & VR Universe</h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{exp.title}</h3>
          <p className="text-gray-800">
            {exp.type === 'ar' && exp.reward ? `Reward: ${exp.reward}` : exp.cost === 0 ? 'Free' : `Cost: $${exp.cost}`}
          </p>
          <button
            onClick={() => startExperience(exp.title)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Start ${exp.title}`}
          >
            Start Experience
          </button>
        </div>
      ))}
      <button
        onClick={scanPortal}
        className="bg-purple-600 text-white p-2 rounded mt-2"
        aria-label="Scan AR portal"
      >
        Scan AR Portal (Free)
      </button>
    </div>
  );
};

export default ARVRScreen;