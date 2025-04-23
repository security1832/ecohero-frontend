// src/screens/InvestmentScreen.jsx
import React from 'react';

const investments = [
  { id: 1, title: 'Eco-Startup Fund', stake: 1000, return: '10% Revenue' },
  { id: 2, title: 'Eco-Coin Futures', stake: 100, return: '5% Profit' },
];

const InvestmentScreen = () => {
  const invest = (title) => alert(`Investing in ${title}`);
  const pitchIdea = () => alert('Pitching to eco-incubator');
  const tradeFutures = () => alert('Trading eco-coin futures');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Investment Hub</h2>
      <p className="text-gray-600 mb-4">Grow your eco-wealth!</p>
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
        onClick={pitchIdea}
        className="bg-blue-600 text-white p-2 rounded mt-2"
        aria-label="Pitch idea"
      >
        Pitch to Incubator
      </button>
      <button
        onClick={tradeFutures}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Trade futures"
      >
        Trade Futures ($0.10/trade)
      </button>
    </div>
  );
};

export default InvestmentScreen;