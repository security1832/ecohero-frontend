// src/screens/ArtGalleryScreen.jsx
import React from 'react';

const artworks = [
  { id: 1, title: 'Eco-Masterpiece', price: 9999.99, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Green Dream', price: 499.99, image: 'https://via.placeholder.com/150' },
];

const ArtGalleryScreen = () => {
  const viewNFT = (title) => alert(`Viewing ${title} ($9.99)`);
  const joinArtShow = () => alert('Joining holographic art show ($999)');
  const createNFT = () => alert('Creating NFT ($9.99)');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco-NFT Gallery</h2>
      <p className="text-gray-600 mb-4">Discover and create eco-art!</p>
      <div className="grid grid-cols-2 gap-4">
        {artworks.map((art) => (
          <div key={art.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={art.image} alt={art.title} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{art.title}</h3>
            <p className="text-gray-800">${art.price}</p>
            <button
              onClick={() => viewNFT(art.title)}
              className="bg-pink-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`View ${art.title}`}
            >
              View NFT ($9.99)
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={joinArtShow}
        className="bg-red-600 text-white p-2 rounded mt-2"
        aria-label="Join art show"
      >
        Join Art Show ($999)
      </button>
      <button
        onClick={createNFT}
        className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
        aria-label="Create NFT"
      >
        Create NFT ($9.99)
      </button>
    </div>
  );
};

export default ArtGalleryScreen;