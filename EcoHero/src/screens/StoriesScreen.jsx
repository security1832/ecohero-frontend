import React, { useState } from 'react';
import Media from '../components/Media';

const dummyStories = [
  {
    id: 1,
    username: 'EcoStar',
    media: { url: 'https://via.placeholder.com/300', type: 'image' },
    timestamp: '2025-04-22T11:00:00Z',
    collaborators: ['GreenVibes'],
  },
  {
    id: 2,
    username: 'GreenVibes',
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    timestamp: '2025-04-22T10:30:00Z',
    isSponsored: true,
  },
];

const StoriesScreen = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Stories</h2>
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {dummyStories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => setCurrentStory(index)}
            className="flex-shrink-0"
          >
            <img
              src={story.media.url}
              alt={story.username}
              className="w-16 h-16 rounded-full border-2 border-green-600"
            />
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Media
          src={dummyStories[currentStory].media.url}
          alt={dummyStories[currentStory].username}
          type={dummyStories[currentStory].media.type}
          onApplyARFilter={applyARFilter}
        />
        <p className="text-gray-800 mt-2">
          {dummyStories[currentStory].username}
          {dummyStories[currentStory].collaborators &&
            dummyStories[currentStory].collaborators.length > 0 &&
            ` with ${dummyStories[currentStory].collaborators.join(', ')}`}
        </p>
        {dummyStories[currentStory].isSponsored && (
          <p className="text-green-600 text-sm font-bold">Sponsored</p>
        )}
      </div>
    </div>
  );
};

export default StoriesScreen;