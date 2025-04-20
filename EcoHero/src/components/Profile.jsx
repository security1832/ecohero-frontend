import Navbar from "./Navbar";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Profile() {
  const data = {
    labels: ["Carbon Saved", "Trees Planted", "Plastic Reduced"],
    datasets: [
      {
        label: "Eco Impact",
        data: [1.2, 5, 10],
        backgroundColor: "rgba(34, 197, 94, 0.5)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600">Your Profile</h2>
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">EcoHero User</h3>
          <p className="text-gray-600">Member since: April 2025</p>
          <p className="text-gray-600">Badges: Green Pioneer, Tree Planter</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Your Eco Impact</h3>
          <Bar data={data} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
}

export default Profile;