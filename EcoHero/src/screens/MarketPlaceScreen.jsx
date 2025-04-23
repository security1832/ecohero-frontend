import React from 'react';

const products = [
  {
    id: 1,
    name: '3D Eco Bottle',
    price: 29.99,
    affiliateLink: 'https://example.com/bottle',
    image: 'https://via.placeholder.com/150',
    isAuction: false,
  },
  {
    id: 2,
    name: 'Vintage Eco Jacket',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    isAuction: true,
    currentBid: 120,
  },
];

const MarketplaceScreen = () => {
  const view3D = (name) => alert(`Viewing ${name} in 3D`);
  const placeBid = (name) => alert(`Placing bid on ${name}`);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Marketplace</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{product.name}</h3>
            <p className="text-gray-800">
              {product.isAuction ? `Current Bid: $${product.currentBid}` : `$${product.price}`}
            </p>
            <button
              onClick={() => view3D(product.name)}
              className="bg-blue-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`View ${product.name} in 3D`}
            >
              View in 3D
            </button>
            {product.isAuction ? (
              <button
                onClick={() => placeBid(product.name)}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Place bid on ${product.name}`}
              >
                Place Bid
              </button>
            ) : (
              <a
                href={product.affiliateLink}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Buy ${product.name}`}
              >
                Buy Now
              </a>
            )}
          </div>
        ))}
      </div>
      <button className="bg-green-600 text-white p-2 rounded mt-4" aria-label="Subscribe to Eco Box">
        Subscribe to Eco Box ($49.99/month)
      </button>
    </div>
  );
};

export default MarketplaceScreen;// src/screens/MarketplaceScreen.jsx
import React from 'react';

const products = [
  {
    id: 1,
    name: '3D Eco Bottle',
    price: 29.99,
    affiliateLink: 'https://example.com/bottle',
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: false,
  },
  {
    id: 2,
    name: 'Vintage Eco Jacket',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    isAuction: true,
    currentBid: 120,
    isBarter: false,
  },
  {
    id: 3,
    name: 'Handmade Aweer Basket',
    price: 0,
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: true,
  },
];

const MarketplaceScreen = () => {
  const view3D = (name) => alert(`Viewing ${name} in 3D`);
  const tryOn = (name) => alert(`Trying on ${name} in AR`);
  const placeBid = (name) => alert(`Placing bid on ${name}`);
  const barterItem = (name) => alert(`Offering barter for ${name}`);
  const customizeBox = () => alert('Customizing Eco-Box');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Marketplace</h2>
      <p className="text-gray-600 mb-4">AI-recommended products for you!</p>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{product.name}</h3>
            <p className="text-gray-800">
              {product.isAuction ? `Current Bid: $${product.currentBid}` : product.isBarter ? 'Barter Only' : `$${product.price}`}
            </p>
            <button
              onClick={() => view3D(product.name)}
              className="bg-blue-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`View ${product.name} in 3D`}
            >
              View in 3D
            </button>
            <button
              onClick={() => tryOn(product.name)}
              className="bg-purple-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`Try on ${product.name}`}
            >
              AR Try-On
            </button>
            {product.isAuction ? (
              <button
                onClick={() => placeBid(product.name)}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Place bid on ${product.name}`}
              >
                Place Bid
              </button>
            ) : product.isBarter ? (
              <button
                onClick={() => barterItem(product.name)}
                className="bg-yellow-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Barter for ${product.name}`}
              >
                Barter
              </button>
            ) : (
              <a
                href={product.affiliateLink}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Buy ${product.name}`}
              >
                Buy Now
              </a>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={customizeBox}
        className="bg-green-600 text-white p-2 rounded mt-4"
        aria-label="Customize Eco Box"
      >
        Customize Eco-Box (Free with Ads)
      </button>
    </div>
  );
};

export default MarketplaceScreen;// src/screens/MarketplaceScreen.jsx
import React from 'react';

const products = [
  {
    id: 1,
    name: '3D Eco Bottle',
    price: 29.99,
    affiliateLink: 'https://example.com/bottle',
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: false,
  },
  {
    id: 2,
    name: 'Vintage Eco Jacket',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    isAuction: true,
    currentBid: 120,
    isBarter: false,
  },
  {
    id: 3,
    name: 'Handmade Aweer Basket',
    price: 0,
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: true,
  },
  {
    id: 4,
    name: 'Virtual Eco-Gear',
    price: 0,
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: false,
    isRental: true,
  },
];

const MarketplaceScreen = () => {
  const view3D = (name) => alert(`Viewing ${name} in 3D`);
  const tryOn = (name) => alert(`Trying on ${name} in AR`);
  const placeBid = (name) => alert(`Placing bid on ${name}`);
  const barterItem = (name) => alert(`Offering barter for ${name}`);
  const customizeBox = () => alert('Customizing Eco-Box Ultra');
  const tradeBot = () => alert('AI trade bot negotiating deal');
  const visitMall = () => alert('Entering virtual eco-mall');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Mega-Market</h2>
      <p className="text-gray-600 mb-4">AI-driven deals for you!</p>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{product.name}</h3>
            <p className="text-gray-800">
              {product.isAuction ? `Current Bid: $${product.currentBid}` : product.isBarter ? 'Barter Only' : product.isRental ? 'Rental (10 Tokens)' : `$${product.price}`}
            </p>
            <button
              onClick={() => view3D(product.name)}
              className="bg-blue-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`View ${product.name} in 3D`}
            >
              View in 3D
            </button>
            <button
              onClick={() => tryOn(product.name)}
              className="bg-purple-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`Try on ${product.name}`}
            >
              AR Try-On
            </button>
            {product.isAuction ? (
              <button
                onClick={() => placeBid(product.name)}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Place bid on ${product.name}`}
              >
                Place Bid
              </button>
            ) : product.isBarter ? (
              <button
                onClick={() => barterItem(product.name)}
                className="bg-yellow-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Barter for ${product.name}`}
              >
                Barter
              </button>
            ) : product.isRental ? (
              <button
                onClick={() => alert(`Renting ${product.name}`)}
                className="bg-orange-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Rent ${product.name}`}
              >
                Rent
              </button>
            ) : (
              <a
                href={product.affiliateLink}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Buy ${product.name}`}
              >
                Buy Now
              </a>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={customizeBox}
        className="bg-green-600 text-white p-2 rounded mt-4"
        aria-label="Customize Eco-Box"
      >
        Customize Eco-Box Ultra (Free with Ads)
      </button>
      <button
        onClick={tradeBot}
        className="bg-pink-600 text-white p-2 rounded mt-4 ml-2"
        aria-label="AI trade bot"
      >
        AI Trade Bot
      </button>
      <button
        onClick={visitMall}
        className="bg-cyan-600 text-white p-2 rounded mt-4 ml-2"
        aria-label="Visit eco-mall"
      >
        Visit Eco-Mall
      </button>
    </div>
  );
};

export default MarketplaceScreen;import React from 'react';

const products = [
  {
    id: 1,
    name: '3D Eco Bottle',
    price: 29.99,
    affiliateLink: 'https://example.com/bottle',
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: false,
    isRental: false,
  },
  {
    id: 2,
    name: 'Vintage Eco Jacket',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    isAuction: true,
    currentBid: 120,
    isBarter: false,
    isRental: false,
  },
  {
    id: 3,
    name: 'Handmade Aweer Basket',
    price: 0,
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: true,
    isRental: false,
  },
  {
    id: 4,
    name: 'Virtual Eco-Gear',
    price: 0,
    image: 'https://via.placeholder.com/150',
    isAuction: false,
    isBarter: false,
    isRental: true,
  },
];

const MarketplaceScreen = () => {
  const view3D = (name) => alert(`Viewing ${name} in 3D`);
  const tryOn = (name) => alert(`Trying on ${name} in AR`);
  const placeBid = (name) => alert(`Placing bid on ${name}`);
  const barterItem = (name) => alert(`Offering barter for ${name}`);
  const customizeBox = () => alert('Customizing Eco-Box Ultra');
  const tradeBot = () => alert('AI trade bot negotiating deal');
  const visitMall = () => alert('Entering virtual eco-mall');
  const rentItem = (name) => alert(`Renting ${name}`);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Mega-Market</h2>
      <p className="text-gray-600 mb-4">AI-driven deals for you!</p>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-green-700 font-semibold">{product.name}</h3>
            <p className="text-gray-800">
              {product.isAuction
                ? `Current Bid: $${product.currentBid}`
                : product.isBarter
                ? 'Barter Only'
                : product.isRental
                ? 'Rental (10 Tokens)'
                : `$${product.price}`}
            </p>
            <button
              onClick={() => view3D(product.name)}
              className="bg-blue-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`View ${product.name} in 3D`}
            >
              View in 3D
            </button>
            <button
              onClick={() => tryOn(product.name)}
              className="bg-purple-600 text-white p-2 rounded mt-2 block text-center"
              aria-label={`Try on ${product.name}`}
            >
              AR Try-On
            </button>
            {product.isAuction ? (
              <button
                onClick={() => placeBid(product.name)}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Place bid on ${product.name}`}
              >
                Place Bid
              </button>
            ) : product.isBarter ? (
              <button
                onClick={() => barterItem(product.name)}
                className="bg-yellow-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Barter for ${product.name}`}
              >
                Barter
              </button>
            ) : product.isRental ? (
              <button
                onClick={() => rentItem(product.name)}
                className="bg-orange-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Rent ${product.name}`}
              >
                Rent
              </button>
            ) : (
              <a
                href={product.affiliateLink}
                className="bg-green-600 text-white p-2 rounded mt-2 block text-center"
                aria-label={`Buy ${product.name}`}
              >
                Buy Now
              </a>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={customizeBox}
        className="bg-green-600 text-white p-2 rounded mt-4"
        aria-label="Customize Eco-Box"
      >
        Customize Eco-Box Ultra (Free with Ads)
      </button>
      <button
        onClick={tradeBot}
        className="bg-pink-600 text-white p-2 rounded mt-4 ml-2"
        aria-label="AI trade bot"
      >
        AI Trade Bot
      </button>
      <button
        onClick={visitMall}
        className="bg-cyan-600 text-white p-2 rounded mt-4 ml-2"
        aria-label="Visit eco-mall"
      >
        Visit Eco-Mall
      </button>
    </div>
  );
};

export default MarketplaceScreen;