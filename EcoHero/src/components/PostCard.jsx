import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({ post, isSponsored = false }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [ecoEmoji, setEcoEmoji] = useState(null);

  const handleLike = () => setLikes(likes + 1);
  const handleEcoEmoji = (emoji) => setEcoEmoji(emoji);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);

  return (
    <div className={`bg-white p-4 mb-4 rounded-lg shadow-md ${isSponsored ? 'border-2 border-green-400' : ''}`}>
      {isSponsored && <span className="text-xs text-green-600 font-bold mb-2 block">Sponsored</span>}
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt="User avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">
            {post.username}
            {post.isPro && <span className="ml-2 text-yellow-500">★ Pro</span>}
          </h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
          isLive={post.isLive}
          onApplyARFilter={applyARFilter}
        />
      )}
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          <button onClick={handleLike} className="text-green-600">{likes} 🌿</button>
          <button onClick={() => handleEcoEmoji('🌳')} className="text-green-600">{ecoEmoji || '🌳'}</button>
        </div>
        {post.isLive && (
          <button className="bg-blue-600 text-white p-1 rounded">Tip $5</button>
        )}
      </div>
      {isSponsored && (
        <a href={post.sponsorLink} className="text-green-600 underline text-sm">
          Learn More
        </a>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userAvatar: PropTypes.string,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    isPro: PropTypes.bool,
    likes: PropTypes.number,
    isLive: PropTypes.bool,
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
  }).isRequired,
  isSponsored: PropTypes.bool,
};

export default PostCard;