import React from 'react';
import PropTypes from 'prop-types';
import { trackEvent } from '../utils/analytics';

const Media = ({
  src,
  alt,
  type = 'image',
  isLive = false,
  isHolographic = false,
  is3D = false,
  isARGame = false,
  isVRTour = false,
  is6D = false,
  isNeural = false,
  isTokenizedAd = false,
  isVirtualFashion = false,
  isEcommerce = false,
  isFintech = false,
  isEsports = false,
  isArtNFT = false,
  isProfession = false,
  voiceSkin,
  spatialAudio,
  onApplyARFilter,
  onStartVR,
  onPlayVoiceComment,
  onStartARGame,
  onRender6D,
  onGenerateNeural,
  onViewAd,
  onTryFashion,
  onBuyProduct,
  onTradeToken,
  onPlayEsports,
  onViewNFT,
  onJoinProfession,
}) => {
  const holographicClass = isHolographic ? 'animate-pulse shadow-[0_0_20px_rgba(0,255,0,0.7)]' : '';
  const className = `w-full h-48 rounded-lg ${holographicClass} ${
    is3D || isARGame || is6D || isVirtualFashion || isEcommerce || isEsports || isArtNFT ? 'cursor-pointer' : ''
  }`;

  if (type === 'image') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img
          src={src}
          alt={alt}
          className={className}
          aria-label={alt}
          onClick={
            is3D
              ? () => alert('Rotate 3D view')
              : is6D
              ? onRender6D
              : isVirtualFashion
              ? onTryFashion
              : isEcommerce
              ? onBuyProduct
              : isEsports
              ? onPlayEsports
              : isArtNFT
              ? onViewNFT
              : null
          }
        />
        <button
          onClick={() => onApplyARFilter('galaxy')}
          className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded"
          aria-label="Apply AR filter"
        >
          AR Filter
        </button>
      </div>
    );
  } else if (type === 'video') {
    return (
      <video src={src} controls autoPlay={isLive} className={className} aria-label={alt}>
        Your browser does not support the video tag.
      </video>
    );
  } else if (type === 'live') {
    return (
      <div className={`relative ${holographicClass}`}>
        <video src={src} autoPlay muted className={className} aria-label={alt} />
        <span className="absolute top-2 left-2 bg-red-600 text-white px-2 rounded">LIVE</span>
      </div>
    );
  } else if (type === 'vr') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={isVRTour ? () => alert('Starting VR tour') : onStartVR}
          className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded"
          aria-label="Start VR tour"
        >
          Start VR Tour
        </button>
      </div>
    );
  } else if (type === 'voice') {
    return (
      <div className={`relative ${holographicClass}`}>
        <audio src={src} controls className="w-full" aria-label={alt} />
        <button
          onClick={() => onPlayVoiceComment(spatialAudio ? 'SpatialEcoBot' : voiceSkin || 'EcoBot')}
          className="absolute top-2 right-2 bg-purple-600 text-white p-1 rounded"
          aria-label="Play voice comment"
        >
          Spatial Voice
        </button>
      </div>
    );
  } else if (type === 'argame') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onStartARGame}
          className="absolute top-2 right-2 bg-yellow-600 text-white p-1 rounded"
          aria-label="Start AR game"
        >
          Start AR Game
        </button>
      </div>
    );
  } else if (type === 'neural') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onGenerateNeural}
          className="absolute top-2 right-2 bg-pink-600 text-white p-1 rounded"
          aria-label="Generate neural avatar"
        >
          Neural Avatar
        </button>
      </div>
    );
  } else if (type === 'tokenizedAd') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onViewAd}
          className="absolute top-2 right-2 bg-cyan-600 text-white p-1 rounded"
          aria-label="View tokenized ad"
        >
          View Ad ($0.01)
        </button>
      </div>
    );
  } else if (type === 'virtualFashion') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onTryFashion}
          className="absolute top-2 right-2 bg-orange-600 text-white p-1 rounded"
          aria-label="Try virtual fashion"
        >
          Try Fashion ($5.99)
        </button>
      </div>
    );
  } else if (type === 'ecommerce') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onBuyProduct}
          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded"
          aria-label="Buy product"
        >
          Buy Now ($0.99–$999.99)
        </button>
      </div>
    );
  } else if (type === 'fintech') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onTradeToken}
          className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded"
          aria-label="Trade token"
        >
          Trade Token ($0.05)
        </button>
      </div>
    );
  } else if (type === 'esports') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onPlayEsports}
          className="absolute top-2 right-2 bg-purple-600 text-white p-1 rounded"
          aria-label="Play esports"
        >
          Play Match ($0.99)
        </button>
      </div>
    );
  } else if (type === 'artNFT') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onViewNFT}
          className="absolute top-2 right-2 bg-pink-600 text-white p-1 rounded"
          aria-label="View NFT"
        >
          View NFT ($9.99)
        </button>
      </div>
    );
  } else if (type === 'profession') {
    return (
      <div className={`relative ${holographicClass}`}>
        <img src={src} alt={alt} className={className} aria-label={alt} />
        <button
          onClick={onJoinProfession}
          className="absolute top-2 right-2 bg-teal-600 text-white p-1 rounded"
          aria-label="Join profession hub"
        >
          Join Hub ($99.99)
        </button>
      </div>
    );
  }
  return null;
};

Media.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  type: PropTypes.oneOf([
    'image',
    'video',
    'live',
    'vr',
    'voice',
    'argame',
    'neural',
    'tokenizedAd',
    'virtualFashion',
    'ecommerce',
    'fintech',
    'esports',
    'artNFT',
    'profession',
  ]),
  isLive: PropTypes.bool,
  isHolographic: PropTypes.bool,
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
  onApplyARFilter: PropTypes.func,
  onStartVR: PropTypes.func,
  onPlayVoiceComment: PropTypes.func,
  onStartARGame: PropTypes.func,
  onRender6D: PropTypes.func,
  onGenerateNeural: PropTypes.func,
  onViewAd: PropTypes.func,
  onTryFashion: PropTypes.func,
  onBuyProduct: PropTypes.func,
  onTradeToken: PropTypes.func,
  onPlayEsports: PropTypes.func,
  onViewNFT: PropTypes.func,
  onJoinProfession: PropTypes.func,
};

function MediaSection() {
  const mediaItems = [
    {
      id: 1,
      type: 'article',
      title: 'The Benefits of Composting',
      summary: 'Learn how composting reduces waste and enriches soil.',
      link: '#',
    },
    {
      id: 2,
      type: 'video',
      title: 'Eco-Friendly Home Hacks',
      summary: 'Watch tips for a sustainable home.',
      link: '#',
    },
    {
      id: 3,
      type: 'vr',
      title: 'Virtual Forest Tour',
      summary: 'Experience the beauty of nature in VR.',
      link: '#',
    },
  ];

  return (
    <section id="media" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Eco-Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {mediaItems.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded shadow">
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-gray-700">{item.summary}</p>
              <a
                href={item.link}
                className="text-green-600 underline"
                onClick={() => trackEvent('media_click', { title: item.title })}
              >
                {item.type === 'article' ? 'Read More' : 'Watch Now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { MediaSection };
export default Media;