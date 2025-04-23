
import React from 'react';

const quests = [
  { id: 1, title: 'Post a Recycling Tip', reward: '50 Tokens' },
  { id: 2, title: 'Reduce 5kg CO2', reward: '100 Tokens' },
];

const GamificationScreen = () => {
  const startQuest = (title) => alert(`Starting ${title}`);
  const joinBattle = () => alert('Joining eco-battle');
  const viewLeague = () => alert('Viewing Eco-League');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Gamification</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-green-700 font-semibold">Daily Quests</h3>
        {quests.map((quest) => (
          <div key={quest.id} className="mb-2">
            <p className="text-gray-800">{quest.title} - {quest.reward}</p>
            <button
              onClick={() => startQuest(quest.title)}
              className="bg-green-600 text-white p-2 rounded"
              aria-label={`Start ${quest.title}`}
            >
              Start Quest
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={joinBattle}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Join eco-battle"
      >
        Join Eco-Battle (20 Tokens)
      </button>
      <button
        onClick={viewLeague}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="View Eco-League"
      >
        View Eco-League
      </button>
    </div>
  );
};

export default GamificationScreen;// src/screens/GamificationScreen.jsx
import React from 'react';

const quests = [
  { id: 1, title: 'Post a Recycling Tip', reward: '50 Tokens' },
  { id: 2, title: 'Reduce 5kg CO2', reward: '100 Tokens' },
  { id: 3, title: 'Join Eco-Bingo', reward: '20 Tokens' },
];

const GamificationScreen = () => {
  const startQuest = (title) => alert(`Starting ${title}`);
  const joinBattle = () => alert('Joining eco-battle');
  const viewLeague = () => alert('Viewing Eco-League');
  const playRPG = () => alert('Playing Eco-Avatar RPG');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Gamification</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-green-700 font-semibold">Daily Quests</h3>
        {quests.map((quest) => (
          <div key={quest.id} className="mb-2">
            <p className="text-gray-800">{quest.title} - {quest.reward}</p>
            <button
              onClick={() => startQuest(quest.title)}
              className="bg-green-600 text-white p-2 rounded"
              aria-label={`Start ${quest.title}`}
            >
              Start Quest
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={joinBattle}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Join eco-battle"
      >
        Join Eco-Battle (Free)
      </button>
      <button
        onClick={viewLeague}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="View Eco-League"
      >
        View Eco-League
      </button>
      <button
        onClick={playRPG}
        className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Play Eco-RPG"
      >
        Play Eco-RPG (Free)
      </button>
    </div>
  );
};

export default GamificationScreen;// src/screens/GamificationScreen.jsx
import React from 'react';

const quests = [
  { id: 1, title: 'Post a Recycling Tip', reward: '50 Tokens' },
  { id: 2, title: 'Reduce 5kg CO2', reward: '100 Tokens' },
  { id: 3, title: 'Join Eco-Bingo', reward: '20 Tokens' },
  { id: 4, title: 'AR Treasure Hunt', reward: '500 Tokens' },
];

const GamificationScreen = () => {
  const startQuest = (title) => alert(`Starting ${title}`);
  const joinBattle = () => alert('Joining eco-battle');
  const viewLeague = () => alert('Viewing Eco-League');
  const playRPG = () => alert('Playing Eco-Avatar MMORPG');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Gamification</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-green-700 font-semibold">Daily Quests</h3>
        {quests.map((quest) => (
          <div key={quest.id} className="mb-2">
            <p className="text-gray-800">{quest.title} - {quest.reward}</p>
            <button
              onClick={() => startQuest(quest.title)}
              className="bg-green-600 text-white p-2 rounded"
              aria-label={`Start ${quest.title}`}
            >
              Start Quest
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={joinBattle}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Join eco-battle"
      >
        Join Eco-Battle (Free)
      </button>
      <button
        onClick={viewLeague}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="View Eco-League"
      >
        View Eco-League
      </button>
      <button
        onClick={playRPG}
        className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Play Eco-MMORPG"
      >
        Play MMORPG (Free)
      </button>
    </div>
  );
};

export default GamificationScreen;import React from 'react';

const quests = [
  { id: 1, title: 'Post a Recycling Tip', reward: '50 Tokens' },
  { id: 2, title: 'Reduce 5kg CO2', reward: '100 Tokens' },
  { id: 3, title: 'Join Eco-Bingo', reward: '20 Tokens' },
  { id: 4, title: 'AR Treasure Hunt', reward: '500 Tokens' },
];

const GamificationScreen = () => {
  const startQuest = (title) => alert(`Starting ${title}`);
  const joinBattle = () => alert('Joining eco-battle');
  const viewLeague = () => alert('Viewing Eco-League');
  const playRPG = () => alert('Playing Eco-Avatar MMORPG');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Gamification</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-green-700 font-semibold">Daily Quests</h3>
        {quests.map((quest) => (
          <div key={quest.id} className="mb-2">
            <p className="text-gray-800">
              {quest.title} - {quest.reward}
            </p>
            <button
              onClick={() => startQuest(quest.title)}
              className="bg-green-600 text-white p-2 rounded"
              aria-label={`Start ${quest.title}`}
            >
              Start Quest
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={joinBattle}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Join eco-battle"
      >
        Join Eco-Battle (Free)
      </button>
      <button
        onClick={viewLeague}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="View Eco-League"
      >
        View Eco-League
      </button>
      <button
        onClick={playRPG}
        className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Play Eco-MMORPG"
      >
        Play MMORPG (Free)
      </button>
    </div>
  );
};

export default GamificationScreen;