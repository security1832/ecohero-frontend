import { useState, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';
import { sendNotification } from '../utils/notifications';

function Challenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, title: '30-Day Zero Waste', description: 'Avoid single-use plastics.', joined: false },
    { id: 2, title: 'Bike to Work Week', description: 'Cycle instead of driving.', joined: false },
  ]);
  const [leaderboard, setLeaderboard] = useState([
    { id: 1, name: 'User1', points: 150 },
    { id: 2, name: 'User2', points: 100 },
  ]);

  const joinChallenge = (id) => {
    const updatedChallenges = challenges.map((c) =>
      c.id === id ? { ...c, joined: true } : c
    );
    setChallenges(updatedChallenges);
    sendNotification('Challenge Joined!', `You're in: ${challenges.find((c) => c.id === id).title}`);
    trackEvent('challenge_joined', { challengeId: id });
  };

  return (
    <section id="challenges" className="py-20 bg-green-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Eco-Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="p-4 bg-white rounded shadow">
              <h4 className="text-lg font-bold">{challenge.title}</h4>
              <p className="text-gray-700">{challenge.description}</p>
              <button
                onClick={() => joinChallenge(challenge.id)}
                className={`mt-2 px-4 py-2 rounded ${
                  challenge.joined
                    ? 'bg-gray-400 text-white'
                    : 'bg-green-600 text-white hover:bg-green-700'
                } transition`}
                disabled={challenge.joined}
              >
                {challenge.joined ? 'Joined' : 'Join Challenge'}
              </button>
            </div>
          ))}
        </div>
        <h3 className="text-xl mb-4 text-gray-700">Leaderboard</h3>
        <ul className="list-decimal text-left max-w-md mx-auto text-gray-700">
          {leaderboard.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name}: {user.points} points
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Challenges;