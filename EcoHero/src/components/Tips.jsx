import { useState, useEffect } from 'react';

function Tips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Mock data; replace with WebSocket or API
    const mockTips = [
      { id: 1, text: 'Use reusable bags to reduce plastic waste.' },
      { id: 2, text: 'Switch to LED bulbs for energy efficiency.' },
      { id: 3, text: 'Compost food scraps to enrich soil.' },
    ];
    setTips(mockTips);

    // Placeholder for real-time updates (polling)
    /*
    const interval = setInterval(() => {
      fetch('https://your-backend-api.com/tips')
        .then((res) => res.json())
        .then((data) => setTips(data))
        .catch(() => console.error('Error fetching tips'));
    }, 60000);
    return () => clearInterval(interval);
    */
  }, []);

  const shareTip = (text) => {
    window.open(`https://x.com/share?text=${encodeURIComponent(text + ' #EcoHero')}`);
  };

  return (
    <section id="tips" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Eco Tips</h2>
        <ul className="list-disc text-left max-w-md mx-auto text-gray-700">
          {tips.map((tip) => (
            <li key={tip.id} className="mb-4 flex justify-between items-center">
              <span>{tip.text}</span>
              <button
                onClick={() => shareTip(tip.text)}
                className="text-green-600 underline hover:text-green-800"
              >
                Share
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tips;