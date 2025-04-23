import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({ post, isSponsored = false, isReel = false }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [pollVote, setPollVote] = useState(null);
  const [tokens, setTokens] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handlePollVote = (option) => setPollVote(option);
  const handleTip = () => setTokens(tokens + 1);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
  const startVR = () => alert('Starting VR tour');
  const playVoiceComment = () => alert('Playing voice comment');

  return (
    <div className={`bg-white p-4 mb-4 rounded-lg shadow-md ${isSponsored ? 'border-2 border-green-400' : ''} ${isReel ? 'h-[600px]' : ''}`}>
      {isSponsored && <span className="text-xs text-green-600 font-bold mb-2 block">Sponsored</span>}
      {isReel && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Reel</span>}
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">
            {post.username}
            {post.isPro && <span className="ml-2 text-yellow-500">★ Pro</span>}
          </h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
          {post.location && <p className="text-gray-500 text-sm">📍 {post.location}</p>}
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
          isLive={post.isLive}
          isHolographic={post.isPro}
          is3D={post.is3D}
          onApplyARFilter={applyARFilter}
          onStartVR={startVR}
          onPlayVoiceComment={playVoiceComment}
        />
      )}
      {post.poll && (
        <div className="mt-2">
          <p className="text-gray-800">{post.poll.question}</p>
          {post.poll.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handlePollVote(option)}
              className={`p-2 m-1 rounded ${pollVote === option ? 'bg-green-600 text-white' : 'bg-gray-200'} animate-pulse`}
              aria-label={`Vote for ${option}`}
            >
              {option}
            </button>
          ))}
          {pollVote && <p className="text-green-600 text-sm">+10 Tokens Earned!</p>}
        </div>
      )}
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          <button onClick={handleLike} className="text-green-600" aria-label="Like post">{likes} 🌿</button>
          <button onClick={handleTip} className="text-green-600" aria-label="Tip tokens">{tokens} 💎</button>
          <button onClick={playVoiceComment} className="text-purple-600" aria-label="Add voice comment">🎙️</button>
        </div>
        {post.isLive && (
          <button className="bg-blue-600 text-white p-1 rounded" aria-label="Gift virtual item">
            Gift ($0.99–$99.99)
          </button>
        )}
      </div>
      {isSponsored && (
        <a href={post.sponsorLink} className="text-green-600 underline text-sm" aria-label="Learn more about sponsor">
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
    location: PropTypes.string,
    is3D: PropTypes.bool,
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
    poll: PropTypes.shape({
      question: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  isSponsored: PropTypes.bool,
  isReel: PropTypes.bool,
};

export default PostCard;// src/components/PostCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({ post, isSponsored = false, isReel = false, isStoryCircle = false, isMeme = false }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [pollVote, setPollVote] = useState(null);
  const [tokens, setTokens] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handlePollVote = (option) => setPollVote(option);
  const handleTip = () => setTokens(tokens + 1);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
  const startVR = () => alert('Starting VR tour');
  const playVoiceComment = (voiceSkin) => alert(`Playing voice comment with ${voiceSkin}`);
  const startARGame = () => alert('Starting AR game');
  const shareMeme = () => alert('Sharing meme on X');

  return (
    <div className={`bg-white p-4 mb-4 rounded-lg shadow-md ${isSponsored ? 'border-2 border-green-400' : ''} ${isReel ? 'h-[600px]' : ''}`}>
      {isSponsored && <span className="text-xs text-green-600 font-bold mb-2 block">Sponsored</span>}
      {isReel && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Reel</span>}
      {isStoryCircle && <span className="text-xs text-purple-600 font-bold mb-2 block">Story Circle</span>}
      {isMeme && <span className="text-xs text-yellow-600 font-bold mb-2 block">Eco-Meme</span>}
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">
            {post.username}
            {post.isPro && <span className="ml-2 text-yellow-500">★ Pro</span>}
          </h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
          {post.location && <p className="text-gray-500 text-sm">📍 {post.location}</p>}
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
          isLive={post.isLive}
          isHolographic={post.isPro}
          is3D={post.is3D}
          isARGame={post.isARGame}
          isVRTour={post.isVRTour}
          voiceSkin={post.voiceSkin}
          onApplyARFilter={applyARFilter}
          onStartVR={startVR}
          onPlayVoiceComment={playVoiceComment}
          onStartARGame={startARGame}
        />
      )}
      {post.poll && (
        <div className="mt-2">
          <p className="text-gray-800">{post.poll.question}</p>
          {post.poll.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handlePollVote(option)}
              className={`p-2 m-1 rounded ${pollVote === option ? 'bg-green-600 text-white' : 'bg-gray-200'} animate-pulse`}
              aria-label={`Vote for ${option}`}
            >
              {option}
            </button>
          ))}
          {pollVote && <p className="text-green-600 text-sm">+10 Tokens Earned!</p>}
        </div>
      )}
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          <button onClick={handleLike} className="text-green-600" aria-label="Like post">{likes} 🌿</button>
          <button onClick={handleTip} className="text-green-600" aria-label="Tip tokens">{tokens} 💎</button>
          <button onClick={() => playVoiceComment(post.voiceSkin || 'EcoBot')} className="text-purple-600" aria-label="Add voice comment">🎙️</button>
          {isMeme && <button onClick={shareMeme} className="text-yellow-600" aria-label="Share meme">😂 Share</button>}
        </div>
        {post.isLive && (
          <button className="bg-blue-600 text-white p-1 rounded" aria-label="Gift virtual item">
            Gift ($0.99–$99.99)
          </button>
        )}
      </div>
      {isSponsored && (
        <a href={post.sponsorLink} className="text-green-600 underline text-sm" aria-label="Learn more about sponsor">
          Learn More
        </a>
      )}
      {isStoryCircle && (
        <button className="bg-purple-600 text-white p-1 rounded mt-2" aria-label="Join story circle">
          Join Circle
        </button>
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
    location: PropTypes.string,
    is3D: PropTypes.bool,
    isARGame: PropTypes.bool,
    isVRTour: PropTypes.bool,
    voiceSkin: PropTypes.string,
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
    poll: PropTypes.shape({
      question: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  isSponsored: PropTypes.bool,
  isReel: PropTypes.bool,
  isStoryCircle: PropTypes.bool,
  isMeme: PropTypes.bool,
};

export default PostCard;// src/components/PostCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({ post, isSponsored = false, isReel = false, isStoryCircle = false, isMeme = false, isMindNetwork = false, isEcoPoetry = false, isHoloRoom = false }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [pollVote, setPollVote] = useState(null);
  const [tokens, setTokens] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handlePollVote = (option) => setPollVote(option);
  const handleTip = () => setTokens(tokens + 1);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
  const startVR = () => alert('Starting VR tour');
  const playVoiceComment = (voiceSkin) => alert(`Playing voice comment with ${voiceSkin}`);
  const startARGame = () => alert('Starting AR game');
  const shareMeme = () => alert('Sharing meme on X');
  const joinMindNetwork = () => alert('Joining mind network');
  const sharePoetry = () => alert('Sharing eco-poetry as NFT');
  const enterHoloRoom = () => alert('Entering holographic room');
  const render6D = () => alert('Rendering 6D content');
  const generateNeural = () => alert('Generating neural avatar');

  return (
    <div className={`bg-white p-4 mb-4 rounded-lg shadow-md ${isSponsored ? 'border-2 border-green-400' : ''} ${isReel ? 'h-[600px]' : ''}`}>
      {isSponsored && <span className="text-xs text-green-600 font-bold mb-2 block">Sponsored</span>}
      {isReel && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Reel</span>}
      {isStoryCircle && <span className="text-xs text-purple-600 font-bold mb-2 block">Story Circle</span>}
      {isMeme && <span className="text-xs text-yellow-600 font-bold mb-2 block">Eco-Meme</span>}
      {isMindNetwork && <span className="text-xs text-pink-600 font-bold mb-2 block">Mind Network</span>}
      {isEcoPoetry && <span className="text-xs text-orange-600 font-bold mb-2 block">Eco-Poetry</span>}
      {isHoloRoom && <span className="text-xs text-cyan-600 font-bold mb-2 block">Holo-Room</span>}
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">
            {post.username}
            {post.isPro && <span className="ml-2 text-yellow-500">★ Pro</span>}
          </h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
          {post.location && <p className="text-gray-500 text-sm">📍 {post.location}</p>}
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
          isLive={post.isLive}
          isHolographic={post.isPro}
          is3D={post.is3D}
          isARGame={post.isARGame}
          isVRTour={post.isVRTour}
          is6D={post.is6D}
          isNeural={post.isNeural}
          voiceSkin={post.voiceSkin}
          spatialAudio={post.spatialAudio}
          onApplyARFilter={applyARFilter}
          onStartVR={startVR}
          onPlayVoiceComment={playVoiceComment}
          onStartARGame={startARGame}
          onRender6D={render6D}
          onGenerateNeural={generateNeural}
        />
      )}
      {post.poll && (
        <div className="mt-2">
          <p className="text-gray-800">{post.poll.question}</p>
          {post.poll.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handlePollVote(option)}
              className={`p-2 m-1 rounded ${pollVote === option ? 'bg-green-600 text-white' : 'bg-gray-200'} animate-pulse`}
              aria-label={`Vote for ${option}`}
            >
              {option}
            </button>
          ))}
          {pollVote && <p className="text-green-600 text-sm">+10 Tokens Earned!</p>}
        </div>
      )}
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          <button onClick={handleLike} className="text-green-600" aria-label="Like post">{likes} 🌿</button>
          <button onClick={handleTip} className="text-green-600" aria-label="Tip tokens">{tokens} 💎</button>
          <button onClick={() => playVoiceComment(post.voiceSkin || 'EcoBot')} className="text-purple-600" aria-label="Add voice comment">🎙️</button>
          {isMeme && <button onClick={shareMeme} className="text-yellow-600" aria-label="Share meme">😂 Share</button>}
          {isMindNetwork && <button onClick={joinMindNetwork} className="text-pink-600" aria-label="Join mind network">🧠 Join</button>}
          {isEcoPoetry && <button onClick={sharePoetry} className="text-orange-600" aria-label="Share poetry">✍️ Share</button>}
          {isHoloRoom && <button onClick={enterHoloRoom} className="text-cyan-600" aria-label="Enter holo-room">🌌 Enter</button>}
        </div>
        {post.isLive && (
          <button className="bg-blue-600 text-white p-1 rounded" aria-label="Gift virtual item">
            Gift ($0.99–$199.99)
          </button>
        )}
      </div>
      {isSponsored && (
        <a href={post.sponsorLink} className="text-green-600 underline text-sm" aria-label="Learn more about sponsor">
          Learn More
        </a>
      )}
      {isStoryCircle && (
        <button className="bg-purple-600 text-white p-1 rounded mt-2" aria-label="Join story circle">
          Join Circle
        </button>
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
    location: PropTypes.string,
    is3D: PropTypes.bool,
    isARGame: PropTypes.bool,
    isVRTour: PropTypes.bool,
    is6D: PropTypes.bool,
    isNeural: PropTypes.bool,
    voiceSkin: PropTypes.string,
    spatialAudio: PropTypes.bool,
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
    poll: PropTypes.shape({
      question: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  isSponsored: PropTypes.bool,
  isReel: PropTypes.bool,
  isStoryCircle: PropTypes.bool,
  isMeme: PropTypes.bool,
  isMindNetwork: PropTypes.bool,
  isEcoPoetry: PropTypes.bool,
  isHoloRoom: PropTypes.bool,
};

export default PostCard;// src/components/PostCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({ post, isSponsored = false, isReel = false, isStoryCircle = false, isMeme = false, isMindNetwork = false, isEcoPoetry = false, isHoloRoom = false, isFanClub = false, isShoutout = false, isRealityShow = false }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [pollVote, setPollVote] = useState(null);
  const [tokens, setTokens] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handlePollVote = (option) => setPollVote(option);
  const handleTip = () => setTokens(tokens + 1);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
  const startVR = () => alert('Starting VR tour');
  const playVoiceComment = (voiceSkin) => alert(`Playing voice comment with ${voiceSkin}`);
  const startARGame = () => alert('Starting AR game');
  const shareMeme = () => alert('Sharing meme on X');
  const joinMindNetwork = () => alert('Joining mind network');
  const sharePoetry = () => alert('Sharing eco-poetry as NFT');
  const enterHoloRoom = () => alert('Entering holographic room');
  const render6D = () => alert('Rendering 6D content');
  const generateNeural = () => alert('Generating neural avatar');
  const joinFanClub = () => alert('Joining holographic fan club ($9.99/month)');
  const buyShoutout = () => alert('Buying tokenized shoutout (100 tokens)');
  const watchRealityShow = () => alert('Watching eco-reality show ($4.99/episode)');
  const viewAd = () => alert('Viewing tokenized ad ($0.01)');
  const tryFashion = () => alert('Trying virtual fashion ($5.99)');

  return (
    <div className={`bg-white p-4 mb-4 rounded-lg shadow-md ${isSponsored ? 'border-2 border-green-400' : ''} ${isReel ? 'h-[600px]' : ''}`}>
      {isSponsored && <span className="text-xs text-green-600 font-bold mb-2 block">Sponsored</span>}
      {isReel && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Reel</span>}
      {isStoryCircle && <span className="text-xs text-purple-600 font-bold mb-2 block">Story Circle</span>}
      {isMeme && <span className="text-xs text-yellow-600 font-bold mb-2 block">Eco-Meme</span>}
      {isMindNetwork && <span className="text-xs text-pink-600 font-bold mb-2 block">Mind Network</span>}
      {isEcoPoetry && <span className="text-xs text-orange-600 font-bold mb-2 block">Eco-Poetry</span>}
      {isHoloRoom && <span className="text-xs text-cyan-600 font-bold mb-2 block">Holo-Room</span>}
      {isFanClub && <span className="text-xs text-red-600 font-bold mb-2 block">Fan Club</span>}
      {isShoutout && <span className="text-xs text-magenta-600 font-bold mb-2 block">Shoutout</span>}
      {isRealityShow && <span className="text-xs text-teal-600 font-bold mb-2 block">Reality Show</span>}
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">
            {post.username}
            {post.isPro && <span className="ml-2 text-yellow-500">★ Pro</span>}
          </h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
          {post.location && <p className="text-gray-500 text-sm">📍 {post.location}</p>}
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
          isLive={post.isLive}
          isHolographic={post.isPro}
          is3D={post.is3D}
          isARGame={post.isARGame}
          isVRTour={post.isVRTour}
          is6D={post.is6D}
          isNeural={post.isNeural}
          isTokenizedAd={post.isTokenizedAd}
          isVirtualFashion={post.isVirtualFashion}
          voiceSkin={post.voiceSkin}
          spatialAudio={post.spatialAudio}
          onApplyARFilter={applyARFilter}
          onStartVR={startVR}
          onPlayVoiceComment={playVoiceComment}
          onStartARGame={startARGame}
          onRender6D={render6D}
          onGenerateNeural={generateNeural}
          onViewAd={viewAd}
          onTryFashion={tryFashion}
        />
      )}
      {post.poll && (
        <div className="mt-2">
          <p className="text-gray-800">{post.poll.question}</p>
          {post.poll.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handlePollVote(option)}
              className={`p-2 m-1 rounded ${pollVote === option ? 'bg-green-600 text-white' : 'bg-gray-200'} animate-pulse`}
              aria-label={`Vote for ${option}`}
            >
              {option}
            </button>
          ))}
          {pollVote && <p className="text-green-600 text-sm">+10 Tokens Earned!</p>}
        </div>
      )}
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          <button onClick={handleLike} className="text-green-600" aria-label="Like post">{likes} 🌿</button>
          <button onClick={handleTip} className="text-green-600" aria-label="Tip tokens">{tokens} 💎</button>
          <button onClick={() => playVoiceComment(post.voiceSkin || 'EcoBot')} className="text-purple-600" aria-label="Add voice comment">🎙️</button>
          {isMeme && <button onClick={shareMeme} className="text-yellow-600" aria-label="Share meme">😂 Share</button>}
          {isMindNetwork && <button onClick={joinMindNetwork} className="text-pink-600" aria-label="Join mind network">🧠 Join</button>}
          {isEcoPoetry && <button onClick={sharePoetry} className="text-orange-600" aria-label="Share poetry">✍️ Share</button>}
          {isHoloRoom && <button onClick={enterHoloRoom} className="text-cyan-600" aria-label="Enter holo-room">🌌 Enter</button>}
          {isFanClub && <button onClick={joinFanClub} className="text-red-600" aria-label="Join fan club">❤️ Fan Club</button>}
          {isShoutout && <button onClick={buyShoutout} className="text-magenta-600" aria-label="Buy shoutout">📣 Shoutout</button>}
          {isRealityShow && <button onClick={watchRealityShow} className="text-teal-600" aria-label="Watch reality show">🎥 Watch</button>}
        </div>
        {post.isLive && (
          <button className="bg-blue-600 text-white p-1 rounded" aria-label="Gift virtual item">
            Gift ($0.99–$999.99)
          </button>
        )}
      </div>
      {isSponsored && (
        <a href={post.sponsorLink} className="text-green-600 underline text-sm" aria-label="Learn more about sponsor">
          Learn More
        </a>
      )}
      {isStoryCircle && (
        <button className="bg-purple-600 text-white p-1 rounded mt-2" aria-label="Join story circle">
          Join Circle
        </button>
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
    location: PropTypes.string,
    is3D: PropTypes.bool,
    isARGame: PropTypes.bool,
    isVRTour: PropTypes.bool,
    is6D: PropTypes.bool,
    isNeural: PropTypes.bool,
    isTokenizedAd: PropTypes.bool,
    isVirtualFashion: PropTypes.bool,
    voiceSkin: PropTypes.string,
    spatialAudio: PropTypes.bool,
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
    poll: PropTypes.shape({
      question: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  isSponsored: PropTypes.bool,
  isReel: PropTypes.bool,
  isStoryCircle: PropTypes.bool,
  isMeme: PropTypes.bool,
  isMindNetwork: PropTypes.bool,
  isEcoPoetry: PropTypes.bool,
  isHoloRoom: PropTypes.bool,
  isFanClub: PropTypes.bool,
  isShoutout: PropTypes.bool,
  isRealityShow: PropTypes.bool,
};

export default PostCard;// src/components/PostCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({ post, isSponsored = false, isReel = false, isStoryCircle = false, isMeme = false, isMindNetwork = false, isEcoPoetry = false, isHoloRoom = false, isFanClub = false, isShoutout = false, isRealityShow = false, isEcommerce = false, isFintech = false, isEsports = false, isArtNFT = false, isProfession = false }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [pollVote, setPollVote] = useState(null);
  const [tokens, setTokens] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handlePollVote = (option) => setPollVote(option);
  const handleTip = () => setTokens(tokens + 1);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
  const startVR = () => alert('Starting VR tour');
  const playVoiceComment = (voiceSkin) => alert(`Playing voice comment with ${voiceSkin}`);
  const startARGame = () => alert('Starting AR game');
  const shareMeme = () => alert('Sharing meme on X');
  const joinMindNetwork = () => alert('Joining mind network');
  const sharePoetry = () => alert('Sharing eco-poetry as NFT');
  const enterHoloRoom = () => alert('Entering holographic room');
  const render6D = () => alert('Rendering 6D content');
  const generateNeural = () => alert('Generating neural avatar');
  const joinFanClub = () => alert('Joining holographic fan club ($9.99/month)');
  const buyShoutout = () => alert('Buying tokenized shoutout (100 tokens)');
  const watchRealityShow = () => alert('Watching eco-reality show ($4.99/episode)');
  const viewAd = () => alert('Viewing tokenized ad ($0.01)');
  const tryFashion = () => alert('Trying virtual fashion ($5.99)');
  const buyProduct = () => alert('Buying product ($0.99–$999.99)');
  const tradeToken = () => alert('Trading token ($0.05)');
  const playEsports = () => alert('Playing esports match ($0.99)');
  const viewNFT = () => alert('Viewing NFT ($9.99)');
  const joinProfession = () => alert('Joining profession hub ($99.99)');

  return (
    <div className={`bg-white p-4 mb-4 rounded-lg shadow-md ${isSponsored ? 'border-2 border-green-400' : ''} ${isReel ? 'h-[600px]' : ''}`}>
      {isSponsored && <span className="text-xs text-green-600 font-bold mb-2 block">Sponsored</span>}
      {isReel && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Reel</span>}
      {isStoryCircle && <span className="text-xs text-purple-600 font-bold mb-2 block">Story Circle</span>}
      {isMeme && <span className="text-xs text-yellow-600 font-bold mb-2 block">Eco-Meme</span>}
      {isMindNetwork && <span className="text-xs text-pink-600 font-bold mb-2 block">Mind Network</span>}
      {isEcoPoetry && <span className="text-xs text-orange-600 font-bold mb-2 block">Eco-Poetry</span>}
      {isHoloRoom && <span className="text-xs text-cyan-600 font-bold mb-2 block">Holo-Room</span>}
      {isFanClub && <span className="text-xs text-red-600 font-bold mb-2 block">Fan Club</span>}
      {isShoutout && <span className="text-xs text-magenta-600 font-bold mb-2 block">Shoutout</span>}
      {isRealityShow && <span className="text-xs text-teal-600 font-bold mb-2 block">Reality Show</span>}
      {isEcommerce && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Shop</span>}
      {isFintech && <span className="text-xs text-green-600 font-bold mb-2 block">Eco-Finance</span>}
      {isEsports && <span className="text-xs text-purple-600 font-bold mb-2 block">Eco-Esports</span>}
      {isArtNFT && <span className="text-xs text-pink-600 font-bold mb-2 block">Eco-Art</span>}
      {isProfession && <span className="text-xs text-teal-600 font-bold mb-2 block">Eco-Profession</span>}
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">
            {post.username}
            {post.isPro && <span className="ml-2 text-yellow-500">★ Pro</span>}
          </h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
          {post.location && <p className="text-gray-500 text-sm">📍 {post.location}</p>}
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
          isLive={post.isLive}
          isHolographic={post.isPro}
          is3D={post.is3D}
          isARGame={post.isARGame}
          isVRTour={post.isVRTour}
          is6D={post.is6D}
          isNeural={post.isNeural}
          isTokenizedAd={post.isTokenizedAd}
          isVirtualFashion={post.isVirtualFashion}
          isEcommerce={post.isEcommerce}
          isFintech={post.isFintech}
          isEsports={post.isEsports}
          isArtNFT={post.isArtNFT}
          isProfession={post.isProfession}
          voiceSkin={post.voiceSkin}
          spatialAudio={post.spatialAudio}
          onApplyARFilter={applyARFilter}
          onStartVR={startVR}
          onPlayVoiceComment={playVoiceComment}
          onStartARGame={startARGame}
          onRender6D={render6D}
          onGenerateNeural={generateNeural}
          onViewAd={viewAd}
          onTryFashion={tryFashion}
          onBuyProduct={buyProduct}
          onTradeToken={tradeToken}
          onPlayEsports={playEsports}
          onViewNFT={viewNFT}
          onJoinProfession={joinProfession}
        />
      )}
      {post.poll && (
        <div className="mt-2">
          <p className="text-gray-800">{post.poll.question}</p>
          {post.poll.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handlePollVote(option)}
              className={`p-2 m-1 rounded ${pollVote === option ? 'bg-green-600 text-white' : 'bg-gray-200'} animate-pulse`}
              aria-label={`Vote for ${option}`}
            >
              {option}
            </button>
          ))}
          {pollVote && <p className="text-green-600 text-sm">+10 Tokens Earned!</p>}
        </div>
      )}
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          <button onClick={handleLike} className="text-green-600" aria-label="Like post">{likes} 🌿</button>
          <button onClick={handleTip} className="text-green-600" aria-label="Tip tokens">{tokens} 💎</button>
          <button onClick={() => playVoiceComment(post.voiceSkin || 'EcoBot')} className="text-purple-600" aria-label="Add voice comment">🎙️</button>
          {isMeme && <button onClick={shareMeme} className="text-yellow-600" aria-label="Share meme">😂 Share</button>}
          {isMindNetwork && <button onClick={joinMindNetwork} className="text-pink-600" aria-label="Join mind network">🧠 Join</button>}
          {isEcoPoetry && <button onClick={sharePoetry} className="text-orange-600" aria-label="Share poetry">✍️ Share</button>}
          {isHoloRoom && <button onClick={enterHoloRoom} className="text-cyan-600" aria-label="Enter holo-room">🌌 Enter</button>}
          {isFanClub && <button onClick={joinFanClub} className="text-red-600" aria-label="Join fan club">❤️ Fan Club</button>}
          {isShoutout && <button onClick={buyShoutout} className="text-magenta-600" aria-label="Buy shoutout">📣 Shoutout</button>}
          {isRealityShow && <button onClick={watchRealityShow} className="text-teal-600" aria-label="Watch reality show">🎥 Watch</button>}
          {isEcommerce && <button onClick={buyProduct} className="text-blue-600" aria-label="Buy product">🛒 Shop</button>}
          {isFintech && <button onClick={tradeToken} className="text-green-600" aria-label="Trade token">💸 Trade</button>}
          {isEsports && <button onClick={playEsports} className="text-purple-600" aria-label="Play esports">🎮 Play</button>}
          {isArtNFT && <button onClick={viewNFT} className="text-pink-600" aria-label="View NFT">🎨 View</button>}
          {isProfession && <button onClick={joinProfession} className="text-teal-600" aria-label="Join profession">💼 Join</button>}
        </div>
        {post.isLive && (
          <button className="bg-blue-600 text-white p-1 rounded" aria-label="Gift virtual item">
            Gift ($0.99–$999.99)
          </button>
        )}
      </div>
      {isSponsored && (
        <a href={post.sponsorLink} className="text-green-600 underline text-sm" aria-label="Learn more about sponsor">
          Learn More
        </a>
      )}
      {isStoryCircle && (
        <button className="bg-purple-600 text-white p-1 rounded mt-2" aria-label="Join story circle">
          Join Circle
        </button>
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
    location: PropTypes.string,
    is3D: PropTypes.bool,
    isARGame: PropTypes.bool,
    isVRTour: PropTypes.bool,
    is6D: PropTypes.bool,
    isNeural: PropTypes.bool,
    isTokenizedAd: PropTypes.bool,
    isVirtualFashion: PropTypes.bool,
    isEcommerce: PropTypes.bool,
    isFintech: PropTypes.bool,
    isEsports: PropTypes.bool,
    isArtNFT: PropTypes.bool,
    isProfession: PropTypes.bool,
    voiceSkin: PropTypes.string,
    spatialAudio: PropTypes.bool,
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
    poll: PropTypes.shape({
      question: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  isSponsored: PropTypes.bool,
  isReel: PropTypes.bool,
  isStoryCircle: PropTypes.bool,
  isMeme: PropTypes.bool,
  isMindNetwork: PropTypes.bool,
  isEcoPoetry: PropTypes.bool,
  isHoloRoom: PropTypes.bool,
  isFanClub: PropTypes.bool,
  isShoutout: PropTypes.bool,
  isRealityShow: PropTypes.bool,
  isEcommerce: PropTypes.bool,
  isFintech: PropTypes.bool,
  isEsports: PropTypes.bool,
  isArtNFT: PropTypes.bool,
  isProfession: PropTypes.bool,
};

export default PostCard;import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const PostCard = ({
  post,
  isSponsored = false,
  isReel = false,
  isStoryCircle = false,
  isMeme = false,
  isMindNetwork = false,
  isEcoPoetry = false,
  isHoloRoom = false,
  isFanClub = false,
  isShoutout = false,
  isRealityShow = false,
  isEcommerce = false,
  isFintech = false,
  isEsports = false,
  isArtNFT = false,
  isProfession = false,
}) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [pollVote, setPollVote] = useState(null);
  const [tokens, setTokens] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handlePollVote = (option) => setPollVote(option);
  const handleTip = () => setTokens(tokens + 1);
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
  const startVR = () => alert('Starting VR tour');
  const playVoiceComment = (voiceSkin) => alert(`Playing voice comment with ${voiceSkin}`);
  const startARGame = () => alert('Starting AR game');
  const shareMeme = () => alert('Sharing meme on X');
  const joinMindNetwork = () => alert('Joining mind network');
  const sharePoetry = () => alert('Sharing eco-poetry as NFT');
  const enterHoloRoom = () => alert('Entering holographic room');
  const render6D = () => alert('Rendering 6D content');
  const generateNeural = () => alert('Generating neural avatar');
  const joinFanClub = () => alert('Joining holographic fan club ($9.99/month)');
  const buyShoutout = () => alert('Buying tokenized shoutout (100 tokens)');
  const watchRealityShow = () => alert('Watching eco-reality show ($4.99/episode)');
  const viewAd = () => alert('Viewing tokenized ad ($0.01)');
  const tryFashion = () => alert('Trying virtual fashion ($5.99)');
  const buyProduct = () => alert('Buying product ($0.99–$999.99)');
  const tradeToken = () => alert('Trading token ($0.05)');
  const playEsports = () => alert('Playing esports match ($0.99)');
  const viewNFT = () => alert('Viewing NFT ($9.99)');
  const joinProfession = () => alert('Joining profession hub ($99.99)');

  return (
    <div
      className={`bg-white p-4 mb-4 rounded-lg shadow-md ${
        isSponsored ? 'border-2 border-green-400' : ''
      } ${isReel ? 'h-[600px]' : ''}`}
    >
      {isSponsored && <span className="text-xs text-green-600 font-bold mb-2 block">Sponsored</span>}
      {isReel && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Reel</span>}
      {isStoryCircle && <span className="text-xs text-purple-600 font-bold mb-2 block">Story Circle</span>}
      {isMeme && <span className="text-xs text-yellow-600 font-bold mb-2 block">Eco-Meme</span>}
      {isMindNetwork && <span className="text-xs text-pink-600 font-bold mb-2 block">Mind Network</span>}
      {isEcoPoetry && <span className="text-xs text-orange-600 font-bold mb-2 block">Eco-Poetry</span>}
      {isHoloRoom && <span className="text-xs text-cyan-600 font-bold mb-2 block">Holo-Room</span>}
      {isFanClub && <span className="text-xs text-red-600 font-bold mb-2 block">Fan Club</span>}
      {isShoutout && <span className="text-xs text-magenta-600 font-bold mb-2 block">Shoutout</span>}
      {isRealityShow && <span className="text-xs text-teal-600 font-bold mb-2 block">Reality Show</span>}
      {isEcommerce && <span className="text-xs text-blue-600 font-bold mb-2 block">Eco-Shop</span>}
      {isFintech && <span className="text-xs text-green-600 font-bold mb-2 block">Eco-Finance</span>}
      {isEsports && <span className="text-xs text-purple-600 font-bold mb-2 block">Eco-Esports</span>}
      {isArtNFT && <span className="text-xs text-pink-600 font-bold mb-2 block">Eco-Art</span>}
      {isProfession && <span className="text-xs text-teal-600 font-bold mb-2 block">Eco-Profession</span>}
      <div className="flex items-center mb-2">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/40'}
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-green-700 font-semibold">
            {post.username}
            {post.isPro && <span className="ml-2 text-yellow-500">★ Pro</span>}
          </h3>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
          {post.location && <p className="text-gray-500 text-sm">📍 {post.location}</p>}
        </div>
      </div>
      <p className="text-gray-800 mb-2">{post.text}</p>
      {post.media && (
        <Media
          src={post.media.url}
          alt={post.text}
          type={post.media.type || 'image'}
          isLive={post.isLive}
          isHolographic={post.isPro}
          is3D={post.is3D}
          isARGame={post.isARGame}
          isVRTour={post.isVRTour}
          is6D={post.is6D}
          isNeural={post.isNeural}
          isTokenizedAd={post.isTokenizedAd}
          isVirtualFashion={post.isVirtualFashion}
          isEcommerce={post.isEcommerce}
          isFintech={post.isFintech}
          isEsports={post.isEsports}
          isArtNFT={post.isArtNFT}
          isProfession={post.isProfession}
          voiceSkin={post.voiceSkin}
          spatialAudio={post.spatialAudio}
          onApplyARFilter={applyARFilter}
          onStartVR={startVR}
          onPlayVoiceComment={playVoiceComment}
          onStartARGame={startARGame}
          onRender6D={render6D}
          onGenerateNeural={generateNeural}
          onViewAd={viewAd}
          onTryFashion={tryFashion}
          onBuyProduct={buyProduct}
          onTradeToken={tradeToken}
          onPlayEsports={playEsports}
          onViewNFT={viewNFT}
          onJoinProfession={joinProfession}
        />
      )}
      {post.poll && (
        <div className="mt-2">
          <p className="text-gray-800">{post.poll.question}</p>
          {post.poll.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handlePollVote(option)}
              className={`p-2 m-1 rounded ${
                pollVote === option ? 'bg-green-600 text-white' : 'bg-gray-200'
              } animate-pulse`}
              aria-label={`Vote for ${option}`}
            >
              {option}
            </button>
          ))}
          {pollVote && <p className="text-green-600 text-sm">+10 Tokens Earned!</p>}
        </div>
      )}
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          <button onClick={handleLike} className="text-green-600" aria-label="Like post">
            {likes} 🌿
          </button>
          <button onClick={handleTip} className="text-green-600" aria-label="Tip tokens">
            {tokens} 💎
          </button>
          <button
            onClick={() => playVoiceComment(post.voiceSkin || 'EcoBot')}
            className="text-purple-600"
            aria-label="Add voice comment"
          >
            🎙️
          </button>
          {isMeme && (
            <button onClick={shareMeme} className="text-yellow-600" aria-label="Share meme">
              😂 Share
            </button>
          )}
          {isMindNetwork && (
            <button onClick={joinMindNetwork} className="text-pink-600" aria-label="Join mind network">
              🧠 Join
            </button>
          )}
          {isEcoPoetry && (
            <button onClick={sharePoetry} className="text-orange-600" aria-label="Share poetry">
              ✍️ Share
            </button>
          )}
          {isHoloRoom && (
            <button onClick={enterHoloRoom} className="text-cyan-600" aria-label="Enter holo-room">
              🌌 Enter
            </button>
          )}
          {isFanClub && (
            <button onClick={joinFanClub} className="text-red-600" aria-label="Join fan club">
              ❤️ Fan Club
            </button>
          )}
          {isShoutout && (
            <button onClick={buyShoutout} className="text-magenta-600" aria-label="Buy shoutout">
              📣 Shoutout
            </button>
          )}
          {isRealityShow && (
            <button onClick={watchRealityShow} className="text-teal-600" aria-label="Watch reality show">
              🎥 Watch
            </button>
          )}
          {isEcommerce && (
            <button onClick={buyProduct} className="text-blue-600" aria-label="Buy product">
              🛒 Shop
            </button>
          )}
          {isFintech && (
            <button onClick={tradeToken} className="text-green-600" aria-label="Trade token">
              💸 Trade
            </button>
          )}
          {isEsports && (
            <button onClick={playEsports} className="text-purple-600" aria-label="Play esports">
              🎮 Play
            </button>
          )}
          {isArtNFT && (
            <button onClick={viewNFT} className="text-pink-600" aria-label="View NFT">
              🎨 View
            </button>
          )}
          {isProfession && (
            <button onClick={joinProfession} className="text-teal-600" aria-label="Join profession">
              💼 Join
            </button>
          )}
        </div>
        {post.isLive && (
          <button className="bg-blue-600 text-white p-1 rounded" aria-label="Gift virtual item">
            Gift ($0.99–$999.99)
          </button>
        )}
      </div>
      {isSponsored && (
        <a href={post.sponsorLink} className="text-green-600 underline text-sm" aria-label="Learn more about sponsor">
          Learn More
        </a>
      )}
      {isStoryCircle && (
        <button className="bg-purple-600 text-white p-1 rounded mt-2" aria-label="Join story circle">
          Join Circle
        </button>
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
    location: PropTypes.string,
    is3D: PropTypes.bool,
    isARGame: PropTypes.bool,
    isVRTour: PropTypes.bool,
    is6D: PropTypes.bool,
    isNeural: PropTypes.bool,
    isTokenizedAd: PropTypes.bool,
    isVirtualFashion: PropTypes.bool,
    isEcommerce: PropTypes.bool,
    isFintech: PropTypes.bool,
    isEsports: PropTypes.bool,
    isArtNFT: PropTypes.bool,
    isProfession: PropTypes.bool,
    voiceSkin: PropTypes.string,
    spatialAudio: PropTypes.bool,
    media: PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
    poll: PropTypes.shape({
      question: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  isSponsored: PropTypes.bool,
  isReel: PropTypes.bool,
  isStoryCircle: PropTypes.bool,
  isMeme: PropTypes.bool,
  isMindNetwork: PropTypes.bool,
  isEcoPoetry: PropTypes.bool,
  isHoloRoom: PropTypes.bool,
  isFanClub: PropTypes.bool,
  isShoutout: PropTypes.bool,
  isRealityShow: PropTypes.bool,
  isEcommerce: PropTypes.bool,
  isFintech: PropTypes.bool,
  isEsports: PropTypes.bool,
  isArtNFT: PropTypes.bool,
  isProfession: PropTypes.bool,
};

export default PostCard;