import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Your Eco Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold dark:text-white">Carbon Saved</h3>
            <p className="text-2xl text-green-600 dark:text-green-400">1.2 tons</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold dark:text-white">
              Challenges Completed
            </h3>
            <p className="text-2xl text-green-600 dark:text-green-400">15</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold dark:text-white">Eco Points</h3>
            <p className="text-2xl text-green-600 dark:text-green-400">850</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold dark:text-white">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <Link
              to="/reels"
              className="bg-ecoBlue text-white p-4 rounded-lg text-center"
            >
              Create Reel
            </Link>
            <Link
              to="/chat"
              className="bg-ecoPurple text-white p-4 rounded-lg text-center"
            >
              Start Chat
            </Link>
            <Link
              to="/live"
              className="bg-green-600 text-white p-4 rounded-lg text-center"
            >
              Go Live
            </Link>
            <Link
              to="/market"
              className="bg-gray-600 text-white p-4 rounded-lg text-center"
            >
              Shop Green
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;