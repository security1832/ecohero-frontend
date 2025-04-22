import React from 'react';
import PropTypes from 'prop-types';
import { trackEvent } from '../utils/analytics';

const Media = ({ src, alt, type = 'image', isLive = false, onApplyARFilter }) => {
  if (type === 'image') {
    return (
      <div className="relative">
        <img src={src} alt={alt} className="w-full h-48 object-cover rounded-lg" />
        <button
          onClick={() => onApplyARFilter('tree')}
          className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded"
        >
          Apply AR Filter
        </button>
      </div>
    );
  } else if (type === 'video') {
    return (
      <video
        src={src}
        controls
        autoPlay={isLive}
        className="w-full h-48 rounded-lg"
      >
        Your browser does not support the video tag.
      </video>
    );
  } else if (type === 'live') {
    return (
      <div className="relative">
        <video src={src} autoPlay muted className="w-full h-48 rounded-lg" />
        <span className="absolute top-2 left-2 bg-red-600 text-white px-2 rounded">LIVE</span>
      </div>
    );
  }
  return null;
};

Media.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['image', 'video', 'live']),
  isLive: PropTypes.bool,
  onApplyARFilter: PropTypes.func,
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