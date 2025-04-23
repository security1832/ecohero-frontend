// src/screens/ProfessionHubScreen.jsx
import React from 'react';

const hubs = [
  { id: 1, title: 'MedEco Hub', price: 99.99 },
  { id: 2, title: 'LawEco Hub', price: 99.99 },
  { id: 3, title: 'EngEco Hub', price: 99.99 },
];

const ProfessionHubScreen = () => {
  const joinHub = (title) => alert(`Joining ${title} ($99.99)`);
  const joinConference = () => alert('Joining holographic conference ($999)');
  const earnCertification = () => alert('Earning certification ($999)');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco-Profession Hubs</h2>
      <p className="text-gray-600 mb-4">Connect with eco-professionals!</p>
      {hubs.map((hub) => (
        <div key={hub.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{hub.title}</h3>
          <p className="text-gray-800">${hub.price}/month</p>
          <button
            onClick={() => joinHub(hub.title)}
            className="bg-teal-600 text-white p-2 rounded mt-2"
            aria-label={`Join ${hub.title}`}
          >
            Join Hub
          </button>
        </div>
      ))}
      <button
        onClick={joinConference}
        className="bg-red-600 text-white p-2 rounded mt-2"
        aria-label="Join conference"
      >
        Join Conference ($999)
      </button>
      <button
        onClick={earnCertification}
        className="bg-blue-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Earn certification"
      >
        Earn Certification ($999)
      </button>
    </div>
  );
};

export default ProfessionHubScreen;