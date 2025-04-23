import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    username: 'EcoWarrior',
    userAvatar: 'https://via.placeholder.com/40',
    text: 'Planted 10 trees today! 🌳',
    timestamp: '2025-04-22T10:00:00Z',
    isPro: true,
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    likes: 100,
    poll: { question: 'Best eco-action?', options: ['Plant Trees', 'Reduce Waste'] },
  },
  {
    username: 'GreenBrand',
    text: 'Discover our eco-friendly bottles! #SustainableLiving',
    timestamp: '2025-04-22T09:30:00Z',
    isSponsored: true,
    sponsorLink: 'https://example.com/eco-bottles',
    likes: 50,
  },
  {
    username: 'GreenLiving',
    text: 'Live eco-event starting now! Join us!',
    timestamp: '2025-04-22T09:00:00Z',
    isLive: true,
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    likes: 200,
  },
];

const FeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts/');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">AI-Curated Feed</h2>
      <p className="text-gray-600 mb-4">Earn tokens by engaging with posts!</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        [...posts, ...dummyPosts].map((post, index) => (
          <PostCard
            key={index}
            post={post}
            isSponsored={post.isSponsored || false}
          />
        ))
      )}
    </div>
  );
};

export default FeedScreen;// src/screens/FeedScreen.jsx
import React, { useState } from 'react';
import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    username: 'EcoWarrior',
    userAvatar: 'https://via.placeholder.com/40',
    text: 'Planted 10 trees today! 🌳 #NoPlasticDay',
    timestamp: '2025-04-22T10:00:00Z',
    isPro: true,
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    likes: 100,
    poll: { question: 'Best eco-action?', options: ['Plant Trees', 'Reduce Waste'] },
    location: 'Nairobi, Kenya',
    voiceSkin: 'EcoBot',
  },
  {
    username: 'GreenBrand',
    text: 'Discover our eco-friendly bottles! #SustainableLiving',
    timestamp: '2025-04-22T09:30:00Z',
    isSponsored: true,
    sponsorLink: 'https://example.com/eco-bottles',
    likes: 50,
    is3D: true,
  },
  {
    username: 'GreenLiving',
    text: 'Live eco-event starting now! Join us!',
    timestamp: '2025-04-22T09:00:00Z',
    isLive: true,
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    likes: 200,
  },
  {
    username: 'EcoStar',
    text: 'Check out my eco-reel! #EcoHero',
    timestamp: '2025-04-22T08:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    isReel: true,
    likes: 300,
  },
  {
    username: 'EcoKid',
    text: 'Made a funny eco-meme! 😂 #EcoMeme',
    timestamp: '2025-04-22T07:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'image' },
    isMeme: true,
    likes: 150,
  },
  {
    username: 'GlobalEco',
    text: 'Join our story circle: My Eco Journey! 🌍',
    timestamp: '2025-04-22T06:00:00Z',
    isStoryCircle: true,
    likes: 80,
  },
];

const FeedScreen = () => {
  const [mood, setMood] = useState('');
  const [emoji, setEmoji] = useState('');
  const handleMoodSubmit = () => alert(`Curating feed for ${mood} mood and ${emoji}`);
  const joinChallenge = () => alert('Joining viral eco-challenge');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">AI-Curated Feed</h2>
      <div className="mb-4">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          className="w-full p-2 border rounded"
          aria-label="Mood input"
        />
        <input
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          placeholder="Pick an emoji (e.g., 😊)"
          className="w-full p-2 border rounded mt-2"
          aria-label="Emoji input"
        />
        <button
          onClick={handleMoodSubmit}
          className="bg-green-600 text-white p-2 rounded mt-2"
          aria-label="Submit mood"
        >
          Curate Feed
        </button>
        <button
          onClick={joinChallenge}
          className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Join challenge"
        >
          Join Challenge
        </button>
      </div>
      <p className="text-gray-600 mb-4">Earn tokens by engaging with posts!</p>
      {dummyPosts.map((post, index) => (
        <PostCard
          key={index}
          post={post}
          isSponsored={post.isSponsored || false}
          isReel={post.isReel || false}
          isStoryCircle={post.isStoryCircle || false}
          isMeme={post.isMeme || false}
        />
      ))}
    </div>
  );
};

export default FeedScreen;// src/screens/FeedScreen.jsx
import React, { useState } from 'react';
import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    username: 'EcoWarrior',
    userAvatar: 'https://via.placeholder.com/40',
    text: 'Planted 10 trees today! 🌳 #NoPlasticDay',
    timestamp: '2025-04-22T10:00:00Z',
    isPro: true,
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    likes: 100,
    poll: { question: 'Best eco-action?', options: ['Plant Trees', 'Reduce Waste'] },
    location: 'Nairobi, Kenya',
    voiceSkin: 'EcoBot',
    spatialAudio: true,
  },
  {
    username: 'GreenBrand',
    text: 'Discover our eco-friendly bottles! #SustainableLiving',
    timestamp: '2025-04-22T09:30:00Z',
    isSponsored: true,
    sponsorLink: 'https://example.com/eco-bottles',
    likes: 50,
    is6D: true,
  },
  {
    username: 'GreenLiving',
    text: 'Live eco-event starting now! Join us!',
    timestamp: '2025-04-22T09:00:00Z',
    isLive: true,
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    likes: 200,
  },
  {
    username: 'EcoStar',
    text: 'Check out my eco-reel! #EcoHero',
    timestamp: '2025-04-22T08:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    isReel: true,
    likes: 300,
  },
  {
    username: 'EcoKid',
    text: 'Made a funny eco-meme! 😂 #EcoMeme',
    timestamp: '2025-04-22T07:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'image' },
    isMeme: true,
    likes: 150,
  },
  {
    username: 'GlobalEco',
    text: 'Join our story circle: My Eco Journey! 🌍',
    timestamp: '2025-04-22T06:00:00Z',
    isStoryCircle: true,
    likes: 80,
  },
  {
    username: 'MindTribe',
    text: 'Connect with eco-souls globally! 🧠 #MindNetwork',
    timestamp: '2025-04-22T05:00:00Z',
    isMindNetwork: true,
    likes: 120,
  },
  {
    username: 'EcoPoet',
    text: 'Wrote an AI eco-poem! ✍️ #EcoPoetry',
    timestamp: '2025-04-22T04:00:00Z',
    isEcoPoetry: true,
    media: { url: 'https://via.placeholder.com/300', type: 'neural' },
    likes: 90,
  },
];

const FeedScreen = () => {
  const [mood, setMood] = useState('');
  const [emoji, setEmoji] = useState('');
  const handleMoodSubmit = () => alert(`Curating feed with neural AI for ${mood} mood and ${emoji}`);
  const joinChallenge = () => alert('Joining viral eco-challenge');
  const predictPoll = () => alert('Predicting poll with quantum AI');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Neural AI Feed</h2>
      <div className="mb-4">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          className="w-full p-2 border rounded"
          aria-label="Mood input"
        />
        <input
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          placeholder="Pick an emoji (e.g., 😊)"
          className="w-full p-2 border rounded mt-2"
          aria-label="Emoji input"
        />
        <button
          onClick={handleMoodSubmit}
          className="bg-green-600 text-white p-2 rounded mt-2"
          aria-label="Submit mood"
        >
          Neural Curation
        </button>
        <button
          onClick={joinChallenge}
          className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Join challenge"
        >
          Join Challenge
        </button>
        <button
          onClick={predictPoll}
          className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Predict poll"
        >
          Quantum Poll
        </button>
      </div>
      <p className="text-gray-600 mb-4">Earn tokens by engaging with posts!</p>
      {dummyPosts.map((post, index) => (
        <PostCard
          key={index}
          post={post}
          isSponsored={post.isSponsored || false}
          isReel={post.isReel || false}
          isStoryCircle={post.isStoryCircle || false}
          isMeme={post.isMeme || false}
          isMindNetwork={post.isMindNetwork || false}
          isEcoPoetry={post.isEcoPoetry || false}
          isHoloRoom={post.isHoloRoom || false}
        />
      ))}
    </div>
  );
};

export default FeedScreen;// src/screens/FeedScreen.jsx
import React, { useState } from 'react';
import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    username: 'EcoWarrior',
    userAvatar: 'https://via.placeholder.com/40',
    text: 'Planted 10 trees today! 🌳 #NoPlasticDay',
    timestamp: '2025-04-22T10:00:00Z',
    isPro: true,
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    likes: 100,
    poll: { question: 'Best eco-action?', options: ['Plant Trees', 'Reduce Waste'] },
    location: 'Nairobi, Kenya',
    voiceSkin: 'EcoBot',
    spatialAudio: true,
  },
  {
    username: 'GreenBrand',
    text: 'Discover our eco-friendly bottles! #SustainableLiving',
    timestamp: '2025-04-22T09:30:00Z',
    isSponsored: true,
    sponsorLink: 'https://example.com/eco-bottles',
    likes: 50,
    is6D: true,
  },
  {
    username: 'GreenLiving',
    text: 'Live eco-event starting now! Join us!',
    timestamp: '2025-04-22T09:00:00Z',
    isLive: true,
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    likes: 200,
  },
  {
    username: 'EcoStar',
    text: 'Check out my eco-reel! #EcoHero',
    timestamp: '2025-04-22T08:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    isReel: true,
    likes: 300,
  },
  {
    username: 'EcoKid',
    text: 'Made a funny eco-meme! 😂 #EcoMeme',
    timestamp: '2025-04-22T07:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'image' },
    isMeme: true,
    likes: 150,
  },
  {
    username: 'GlobalEco',
    text: 'Join our story circle: My Eco Journey! 🌍',
    timestamp: '2025-04-22T06:00:00Z',
    isStoryCircle: true,
    likes: 80,
  },
  {
    username: 'MindTribe',
    text: 'Connect with eco-souls globally! 🧠 #MindNetwork',
    timestamp: '2025-04-22T05:00:00Z',
    isMindNetwork: true,
    likes: 120,
  },
  {
    username: 'EcoPoet',
    text: 'Wrote an AI eco-poem! ✍️ #EcoPoetry',
    timestamp: '2025-04-22T04:00:00Z',
    isEcoPoetry: true,
    media: { url: 'https://via.placeholder.com/300', type: 'neural' },
    likes: 90,
  },
];

const FeedScreen = () => {
  const [mood, setMood] = useState('');
  const [emoji, setEmoji] = useState('');
  const handleMoodSubmit = () => alert(`Curating feed with neural AI for ${mood} mood and ${emoji}`);
  const joinChallenge = () => alert('Joining viral eco-challenge');
  const predictPoll = () => alert('Predicting poll with quantum AI');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Neural AI Feed</h2>
      <div className="mb-4">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          className="w-full p-2 border rounded"
          aria-label="Mood input"
        />
        <input
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          placeholder="Pick an emoji (e.g., 😊)"
          className="w-full p-2 border rounded mt-2"
          aria-label="Emoji input"
        />
        <button
          onClick={handleMoodSubmit}
          className="bg-green-600 text-white p-2 rounded mt-2"
          aria-label="Submit mood"
        >
          Neural Curation
        </button>
        <button
          onClick={joinChallenge}
          className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Join challenge"
        >
          Join Challenge
        </button>
        <button
          onClick={predictPoll}
          className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Predict poll"
        >
          Quantum Poll
        </button>
      </div>
      <p className="text-gray-600 mb-4">Earn tokens by engaging with posts!</p>
      {dummyPosts.map((post, index) => (
        <PostCard
          key={index}
          post={post}
          isSponsored={post.isSponsored || false}
          isReel={post.isReel || false}
          isStoryCircle={post.isStoryCircle || false}
          isMeme={post.isMeme || false}
          isMindNetwork={post.isMindNetwork || false}
          isEcoPoetry={post.isEcoPoetry || false}
          isHoloRoom={post.isHoloRoom || false}
        />
      ))}
    </div>
  );
};

export default FeedScreen;import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const dummyPosts = [
  {
    username: 'EcoWarrior',
    userAvatar: 'https://via.placeholder.com/40',
    text: 'Planted 10 trees today! 🌳 #NoPlasticDay',
    timestamp: '2025-04-22T10:00:00Z',
    isPro: true,
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    likes: 100,
    poll: { question: 'Best eco-action?', options: ['Plant Trees', 'Reduce Waste'] },
    location: 'Nairobi, Kenya',
    voiceSkin: 'EcoBot',
    spatialAudio: true,
  },
  {
    username: 'GreenBrand',
    text: 'Discover our eco-friendly bottles! #SustainableLiving',
    timestamp: '2025-04-22T09:30:00Z',
    isSponsored: true,
    sponsorLink: 'https://example.com/eco-bottles',
    likes: 50,
    is6D: true,
  },
  {
    username: 'GreenLiving',
    text: 'Live eco-event starting now! Join us!',
    timestamp: '2025-04-22T09:00:00Z',
    isLive: true,
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    likes: 200,
  },
  {
    username: 'EcoStar',
    text: 'Check out my eco-reel! #EcoHero',
    timestamp: '2025-04-22T08:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'video' },
    isReel: true,
    likes: 300,
  },
  {
    username: 'EcoKid',
    text: 'Made a funny eco-meme! 😂 #EcoMeme',
    timestamp: '2025-04-22T07:00:00Z',
    media: { url: 'https://via.placeholder.com/300', type: 'image' },
    isMeme: true,
    likes: 150,
  },
  {
    username: 'GlobalEco',
    text: 'Join our story circle: My Eco Journey! 🌍',
    timestamp: '2025-04-22T06:00:00Z',
    isStoryCircle: true,
    likes: 80,
  },
  {
    username: 'MindTribe',
    text: 'Connect with eco-souls globally! 🧠 #MindNetwork',
    timestamp: '2025-04-22T05:00:00Z',
    isMindNetwork: true,
    likes: 120,
  },
  {
    username: 'EcoPoet',
    text: 'Wrote an AI eco-poem! ✍️ #EcoPoetry',
    timestamp: '2025-04-22T04:00:00Z',
    isEcoPoetry: true,
    media: { url: 'https://via.placeholder.com/300', type: 'neural' },
    likes: 90,
  },
];

const FeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mood, setMood] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts/');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleMoodSubmit = () => alert(`Curating feed with neural AI for ${mood} mood and ${emoji}`);
  const joinChallenge = () => alert('Joining viral eco-challenge');
  const predictPoll = () => alert('Predicting poll with quantum AI');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Neural AI Feed</h2>
      <div className="mb-4">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          className="w-full p-2 border rounded"
          aria-label="Mood input"
        />
        <input
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          placeholder="Pick an emoji (e.g., 😊)"
          className="w-full p-2 border rounded mt-2"
          aria-label="Emoji input"
        />
        <button
          onClick={handleMoodSubmit}
          className="bg-green-600 text-white p-2 rounded mt-2"
          aria-label="Submit mood"
        >
          Neural Curation
        </button>
        <button
          onClick={joinChallenge}
          className="bg-yellow-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Join challenge"
        >
          Join Challenge
        </button>
        <button
          onClick={predictPoll}
          className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
          aria-label="Predict poll"
        >
          Quantum Poll
        </button>
      </div>
      <p className="text-gray-600 mb-4">Earn tokens by engaging with posts!</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        [...posts, ...dummyPosts].map((post, index) => (
          <PostCard
            key={index}
            post={post}
            isSponsored={post.isSponsored || false}
            isReel={post.isReel || false}
            isStoryCircle={post.isStoryCircle || false}
            isMeme={post.isMeme || false}
            isMindNetwork={post.isMindNetwork || false}
            isEcoPoetry={post.isEcoPoetry || false}
            isHoloRoom={post.isHoloRoom || false}
          />
        ))
      )}
    </div>
  );
};

export default FeedScreen;