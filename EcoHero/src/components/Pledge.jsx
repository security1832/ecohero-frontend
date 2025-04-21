import { useState, useEffect } from 'react';

function Pledge() {
  const [pledges, setPledges] = useState([]);
  const [newPledge, setNewPledge] = useState('');

  useEffect(() => {
    // Load pledges from localStorage
    const savedPledges = JSON.parse(localStorage.getItem('pledges') || '[]');
    setPledges(savedPledges);
  }, []);

  const addPledge = (e) => {
    e.preventDefault();
    if (!newPledge) return;
    const updatedPledges = [...pledges, { id: Date.now(), text: newPledge, completed: false }];
    setPledges(updatedPledges);
    localStorage.setItem('pledges', JSON.stringify(updatedPledges));
    setNewPledge('');
  };

  const togglePledge = (id) => {
    const updatedPledges = pledges.map((pledge) =>
      pledge.id === id ? { ...pledge, completed: !pledge.completed } : pledge
    );
    setPledges(updatedPledges);
    localStorage.setItem('pledges', JSON.stringify(updatedPledges));
  };

  return (
    <section id="pledge" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Eco Pledges</h2>
        <form onSubmit={addPledge} className="max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="e.g., Reduce plastic use"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            value={newPledge}
            onChange={(e) => setNewPledge(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Add Pledge
          </button>
        </form>
        <ul className="list-disc text-left max-w-md mx-auto text-gray-700">
          {pledges.map((pledge) => (
            <li
              key={pledge.id}
              className={`mb-2 ${pledge.completed ? 'line-through text-green-600' : ''}`}
              onClick={() => togglePledge(pledge.id)}
            >
              {pledge.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pledge;