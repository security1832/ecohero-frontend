import { useState } from 'react';

function Calculator() {
  const [inputs, setInputs] = useState({ electricity: 0, travel: 0 });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
  };

  const calculateFootprint = (e) => {
    e.preventDefault();
    const footprint = inputs.electricity * 0.5 + inputs.travel * 2; // Simplified formula
    setResult(footprint);
  };

  return (
    <section id="calculator" className="py-20 bg-green-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Carbon Footprint Calculator</h2>
        <form onSubmit={calculateFootprint} className="max-w-md mx-auto">
          <input
            type="number"
            name="electricity"
            placeholder="Monthly Electricity (kWh)"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="travel"
            placeholder="Annual Travel (miles)"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Calculate
          </button>
        </form>
        {result !== null && (
          <p className="mt-4 text-lg text-gray-700">
            Your estimated carbon footprint: <strong>{result} kg CO₂/year</strong>
            <br />
            {result > 5000 ? 'Try reducing travel!' : 'Great job, keep it green!'}
          </p>
        )}
      </div>
    </section>
  );
}

export default Calculator;