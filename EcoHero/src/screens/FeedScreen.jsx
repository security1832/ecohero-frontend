import React from 'react';
import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    username: 'EcoWarrior',
    userAvatar: 'https://via.placeholder.com/40',
    text: 'Planted 10 trees today! 🌳',
    timestamp: '2025-04-22T10:00:00Z',
    isPro: true,
    media: { url: 'https://via.placeholder.com/300', type: 'image' },
  },
  {
    username: 'GreenBrand',
    text: 'Discover our eco-friendly water bottles! #SustainableLiving',
    timestamp: '2025-04-22T09:30:00Z',
    isSponsored: true,
    sponsorLink: 'https://example.com/eco-bottles',
  },
  {
    username: 'GreenLiving',
    text: 'Switched to reusable straws! #EcoHero',
    timestamp: '2025-04-22T09:00:00Z',
  },
];

const FeedScreen = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Community Feed</h2>
      <p className="text-gray-600 mb-4">Earn points by liking or sharing posts!</p>
      {dummyPosts.map((post, index) => (
        <PostCard
          key={index}
          post={post}
          isSponsored={post.isSponsored || false}
          sponsorLink={post.sponsorLink}
        />
      ))}
    </div>
  );
};

export default FeedScreen;