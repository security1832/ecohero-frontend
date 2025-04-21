import { useState, useEffect } from 'react';

function Tips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Placeholder: Replace with your friend's backend API
    const mockTips = [
      { id: 1, text: 'Use reusable bags to reduce plastic waste.' },
      { id: 2, text: 'Switch to LED bulbs for energy efficiency.' },
      { id: 3, text: 'Compost food scraps to enrich soil.' },
    ];
    setTips(mockTips);
    // Uncomment when backend API is ready
    /*
    fetch('https://your-backend-api.com/tips')
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch(() => alert('Error fetching tips'));
    */
  }, []);

  return (
    <section id="tips" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Eco Tips</h2>
        <ul className="list-disc text-left max-w-md mx-auto text-gray-700">
          {tips.map((tip) => (
            <li key={tip.id} className="mb-2">{tip.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tips;