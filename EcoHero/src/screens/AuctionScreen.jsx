// src/screens/AuctionScreen.jsx
import React from 'react';

const auctions = [
  { id: 1, title: 'Aweer Handwoven Basket', currentBid: 500, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Solar Microgrid Patent', currentBid: 50000, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Maasai Beaded Necklace', currentBid: 200, image: 'https://via.placeholder.com/150' },
];

const AuctionScreen = () => {
  const placeBid = (title) => alert(`Placing bid on ${title}`);
  const view3D = (title) => alert(`Viewing ${title} in 3D`);
  const buyNow = (title) => alert(`Buying ${title} instantly`);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Global Eco-Auctions</h2>
      <p className="text-gray-600 mb-4">Bid on unique items and patents!</p>
      <div className="grid grid-cols-2 gap-4">
        {auctions.map((auction) => (
          <div key={auction.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={auction.image} alt={auction.title} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{auction.title}</h3>
            <p className="text-gray-800">Current Bid: ${auction.currentBid}</p>
            <button
              onClick={() => view3D(auction.title)}
              className="bg-blue-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`View ${auction.title} in 3D`}
            >
              View in 3D
            </button>
            <button
              onClick={() => placeBid(auction.title)}
              className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`Bid on ${auction.title}`}
            >
              Place Bid
            </button>
            <button
              onClick={() => buyNow(auction.title)}
              className="bg-red-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`Buy ${auction.title} now`}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionScreen;