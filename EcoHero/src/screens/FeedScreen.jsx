import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

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
      <h2 className="text-2xl font-bold text-green-700 mb-4">Community Feed</h2>
      <p className="text-gray-600 mb-4">Earn points by liking or sharing posts!</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isSponsored={post.isSponsored || false}
            sponsorLink={post.sponsorLink}
          />
        ))
      )}
    </div>
  );
};

export default FeedScreen;