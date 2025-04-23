import React from 'react';

const user = {
  username: 'EcoUser',
  tokens: 1500,
  badges: ['Tree Planter', 'Zero Waste'],
  stickers: ['EcoStar', 'GreenHeart'],
  isPro: false,
  nfts: ['Carbon Hero', 'Eco Pioneer', 'Virtual Eco-Land'],
  rank: 'Gold',
  league: 'Global Eco-League',
};

const ProfileScreen = () => {
  const redeemTokens = () => alert('Redeeming tokens');
  const viewLeaderboard = () => alert('Viewing decentralized leaderboard');
  const stakeTokens = () => alert('Staking 500 tokens for Pro access');
  const viewTrophyRoom = () => alert('Viewing 3D trophy room');
  const voteGovernance = () => alert('Voting on new feature');
  const viewEcoLand = () => alert('Viewing virtual eco-land');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{user.username}'s Profile</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="text-gray-800">Eco-Tokens: {user.tokens}</p>
        <p className="text-gray-800">Badges: {user.badges.join(', ')}</p>
        <p className="text-gray-800">Stickers: {user.stickers.join(', ')}</p>
        <p className="text-gray-800">NFTs: {user.nfts.join(', ')}</p>
        <p className="text-gray-800">Eco-League: {user.league}</p>
        <p className="text-gray-800">Rank: {user.rank}</p>
        {user.isPro ? (
          <p className="text-green-600">Galactic Member ($199.99/month)</p>
        ) : (
          <div>
            <button className="bg-green-600 text-white p-2 rounded mt-2" aria-label="Upgrade to Pro">
              Upgrade to Pro ($9.99/month)
            </button>
            <button className="bg-blue-600 text-white p-2 rounded mt-2 ml-2" aria-label="Upgrade to Galactic">
              Upgrade to Galactic ($199.99/month)
            </button>
          </div>
        )}
        <button
          onClick={redeemTokens}
          className="bg-green-600 text-white p-2 rounded mt-2"
          aria-label="Redeem tokens"
        >
          Redeem Tokens
        </button>
        <button
          onClick={stakeTokens}
          className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Stake tokens"
        >
          Stake Tokens
        </button>
        <button
          onClick={viewTrophyRoom}
          className="bg-red-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="View trophy room"
        >
          Trophy Room (Free)
        </button>
        <button
          onClick={voteGovernance}
          className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Vote on governance"
        >
          Vote on Features (100 Tokens)
        </button>
        <button
          onClick={viewEcoLand}
          className="bg-cyan-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="View eco-land"
        >
          View Eco-Land (Free)
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-green-700 font-semibold">Decentralized Leaderboard</h3>
        <button
          onClick={viewLeaderboard}
          className="bg-blue-600 text-white p-2 rounded mt-2"
          aria-label="View leaderboard"
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;