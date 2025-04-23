// src/screens/CreatorStudioScreen.jsx
import React from 'react';

const tools = [
  { id: 1, title: 'AI Content Optimizer', price: 9.99 },
  { id: 2, title: 'NFT Creator', price: 0 },
  { id: 3, title: 'Subscription Manager', price: 49.99 },
];

const CreatorStudioScreen = () => {
  const useTool = (title) => alert(`Using ${title}`);
  const createNFT = () => alert('Creating eco-NFT');
  const optimizeContent = () => alert('Optimizing content with AI');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Creator Studio</h2>
      <p className="text-gray-600 mb-4">Monetize your eco-content!</p>
      {tools.map((tool) => (
        <div key={tool.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{tool.title}</h3>
          <p className="text-gray-800">{tool.price > 0 ? `$${tool.price}/month` : 'Free'}</p>
          <button
            onClick={() => useTool(tool.title)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Use ${tool.title}`}
          >
            Use Now
          </button>
        </div>
      ))}
      <button
        onClick={createNFT}
        className="bg-purple-600 text-white p-2 rounded mt-2"
        aria-label="Create NFT"
      >
        Create NFT (Free)
      </button>
      <button
        onClick={optimizeContent}
        className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Optimize content"
      >
        Optimize Content ($9.99)
      </button>
    </div>
  );
};

export default CreatorStudioScreen;