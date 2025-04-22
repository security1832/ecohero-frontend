import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

const CarbonTrackerScreen = () => {
  const [carbonData, setCarbonData] = useState({ transport: 0, food: 0, energy: 0 });
  const isPro = false;

  const handleInputChange = (e) => {
    setCarbonData({ ...carbonData, [e.target.name]: Number(e.target.value) });
  };

  const calculateTotal = () => carbonData.transport + carbonData.food + carbonData.energy;

  const buyOffset = async () => {
    const stripe = await stripePromise;
    try {
      const response = await axios.post('http://localhost:8000/api/payment/', {
        amount: 10, // $10 for 1 ton
        payment_method: 'pm_card_visa', // For testing
      });
      await stripe.confirmCardPayment(response.data.client_secret);
      alert('Carbon offset purchased!');
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed');
    }
  };

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
        />
      </div>
      <p className="text-gray-800 mb-4">Total Carbon Footprint: {calculateTotal()} kg CO2</p>
      {isPro ? (
        <p className="text-green-600 mb-4">Pro: View advanced analytics!</p>
      ) : (
        <button className="bg-green-600 text-white p-2 rounded mb-4">
          Upgrade to Pro for Analytics
        </button>
      )}
      <button onClick={buyOffset} className="bg-blue-600 text-white p-2 rounded">
        Buy Carbon Offset ($10/ton)
      </button>
    </div>
  );
};

export default CarbonTrackerScreen;