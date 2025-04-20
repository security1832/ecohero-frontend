import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600">Your Eco Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Carbon Saved</h3>
            <p className="text-2xl text-green-600">1.2 tons</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Challenges Completed</h3>
            <p className="text-2xl text-green-600">15</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Eco Points</h3>
            <p className="text-2xl text-green-600">850</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;