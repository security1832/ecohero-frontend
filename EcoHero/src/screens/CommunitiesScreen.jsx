import React from 'react';

const communities = [
  { id: 1, name: 'Zero Waste Warriors', type: 'voice', isPremium: false },
  { id: 2, name: 'Eco Innovators', type: 'video', isPremium: false },
  { id: 3, name: 'Aweer Eco-Hub', type: 'cultural', isPremium: false },
  { id: 4, name: 'Sign Language Eco', type: 'sign', isPremium: false },
  { id: 5, name: 'Neural Eco-Minds', type: 'neural', isPremium: false },
];

const CommunitiesScreen = () => {
  const joinRoom = (name) => alert(`Joining ${name} room`);
  const joinDebate = () => alert('Joining AI-moderated debate');
  const accessHub = () => alert('Accessing AR community hub');
  const archiveStory = () => alert('Archiving eco-story in vault');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Communities</h2>
      {communities.map((community) => (
        <div key={community.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{community.name}</h3>
          <p className="text-gray-800">
            {community.type === 'voice'
              ? 'Voice Room'
              : community.type === 'video'
              ? 'Video Room'
              : community.type === 'cultural'
              ? 'Cultural Hub'
              : community.type === 'sign'
              ? 'Sign Language Room'
              : 'Neural Chat'}
          </p>
          {community.isPremium && <p className="text-green-600">Premium Access ($9.99/month)</p>}
          <button
            onClick={() => joinRoom(community.name)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Join ${community.name}`}
          >
            Join Now (Free)
          </button>
        </div>
      ))}
      <button
        onClick={joinDebate}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Join debate"
      >
        Join Debate (Free)
      </button>
      <button
        onClick={accessHub}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Access AR hub"
      >
        AR Hub (Free with Ads)
      </button>
      <button
        onClick={archiveStory}
        className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Archive story"
      >
        Story Vault (Free)
      </button>
    </div>
  );
};

export default CommunitiesScreen;