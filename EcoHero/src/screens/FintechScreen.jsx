// src/screens/FintechScreen.jsx
import React from 'react';

const investments = [
  { id: 1, title: 'Eco-Coin Staking', stake: 1000, return: '10% APR' },
  { id: 2, title: 'Green Bond', stake: 10000, return: '5% Yield' },
];

const FintechScreen = () => {
  const invest = (title) => alert(`Investing in ${title}`);
  const tradeToken = () => alert('Trading token ($0.05)');
  const joinSummit = () => alert('Joining financial summit ($999)');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco-Fintech Hub</h2>
      <p className="text-gray-600 mb-4">Grow your wealth sustainably!</p>
      {investments.map((inv) => (
        <div key={inv.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{inv.title}</h3>
          <p className="text-gray-800">Stake: {inv.stake} Tokens</p>
          <p className="text-gray-800">Return: {inv.return}</p>
          <button
            onClick={() => invest(inv.title)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Invest in ${inv.title}`}
          >
            Invest Now
          </button>
        </div>
      ))}
      <button
        onClick={tradeToken}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Trade token"
      >
        Trade Token ($0.05)
      </button>
      <button
        onClick={joinSummit}
        className="bg-red-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Join summit"
      >
        Join Summit ($999)
      </button>
    </div>
  );
};

export default FintechScreen;