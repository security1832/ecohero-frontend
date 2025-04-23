import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

const CarbonTrackerScreen = () => {
  const [carbonData, setCarbonData] = useState({ transport: 0, food: 0, energy: 0 });
  const [chatMessage, setChatMessage] = useState('');
  const [plan, setPlan] = useState('');
  const isPro = false;

  const handleInputChange = (e) => {
    setCarbonData({ ...carbonData, [e.target.name]: Number(e.target.value) });
  };

  const calculateTotal = () => carbonData.transport + carbonData.food + carbonData.energy;

  const getAIResponse = () => {
    if (chatMessage.toLowerCase().includes('reduce')) {
      setPlan('Goal: Reduce 10kg CO2 this week by composting or biking!');
      return 'Try composting, biking, or using public transport to cut emissions!';
    }
    return 'Ask me how to reduce your carbon footprint!';
  };

  const buyOffset = async () => {
    const stripe = await stripePromise;
    try {
      const response = await axios.post('http://localhost:8000/api/payment/', {
        amount: 10, // $10 for 1 ton
        payment_method: 'pm_card_visa', // For testing
      });
      await stripe.confirmCardPayment(response.data.client_secret);
      alert('Carbon offset purchased with NFT certificate!');
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed');
    }
  };

  const donateTokens = () => alert('Donating tokens to eco-NGO');
  const predictCarbon = () => alert('Predicting 10-year carbon impact with AI oracle');
  const growFarm = () => alert('Growing virtual eco-farm');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Carbon Tracker</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Transport (kg CO2)</label>
        <input
          type="number"
          name="transport"
          value={carbonData.transport}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          aria-label="Transport carbon input"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Food (kg CO2)</label>
        <input
          type="number"
          name="food"
          value={carbonData.food}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          aria-label="Food carbon input"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Energy (kg CO2)</label>
        <input
          type="number"
          name="energy"
          value={carbonData.energy}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          aria-label="Energy carbon input"
        />
      </div>
      <p className="text-gray-800 mb-4">Total Carbon Footprint: {calculateTotal()} kg CO2</p>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-green-700 font-semibold">AI Eco-Coach</h3>
        <input
          type="text"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Ask for eco-tips..."
          aria-label="AI coach input"
        />
        <p className="text-gray-800">{getAIResponse()}</p>
        {plan && <p className="text-green-600">{plan}</p>}
      </div>
      {isPro ? (
        <p className="text-green-600 mb-4">Pro: IoT tracking enabled!</p>
      ) : (
        <button className="bg-green-600 text-white p-2 rounded mb-4" aria-label="Upgrade to Galactic">
          Upgrade to Galactic ($199.99/month)
        </button>
      )}
      <button onClick={buyOffset} className="bg-blue-600 text-white p-2 rounded mr-2" aria-label="Buy NFT offset">
        Buy NFT Offset (50 Tokens)
      </button>
      <button onClick={donateTokens} className="bg-purple-600 text-white p-2 rounded mr-2" aria-label="Donate tokens">
        Donate Tokens
      </button>
      <button onClick={predictCarbon} className="bg-pink-600 text-white p-2 rounded mr-2" aria-label="Predict carbon">
        Predict Carbon
      </button>
      <button onClick={growFarm} className="bg-yellow-600 text-white p-2 rounded" aria-label="Grow eco-farm">
        Grow Eco-Farm
      </button>
    </div>
  );
};

export default CarbonTrackerScreen;