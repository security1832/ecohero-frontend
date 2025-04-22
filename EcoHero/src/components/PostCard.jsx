// src/components/PostCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt="User avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">{post.username}</h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
        />
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
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
  }).isRequired,
};

export default PostCard;