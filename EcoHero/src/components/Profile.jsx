import Navbar from "../layout/NavBar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Profile() {
  const [videos, setVideos] = useState([]);
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

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideos((prev) => [...prev, { id: Date.now(), url }]);
    }
  };

  const shareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: "My EcoHero Profile",
        text: "Check out my eco-journey on EcoHero!",
        url: window.location.href,
      });
    } else {
      alert("Share your EcoHero profile!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Your Profile
        </h2>
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold dark:text-white">EcoHero User</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Member since: April 2025
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Badges: Green Pioneer, Tree Planter
            </p>
          </div>
          <button
            onClick={shareProfile}
            className="px-4 py-2 bg-ecoBlue text-white rounded hover:bg-ecoBlue/80"
          >
            <FaShareAlt className="inline mr-2" /> Share
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold dark:text-white">Your Eco Impact</h3>
          <Bar data={data} options={{ responsive: true }} />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold dark:text-white">Your Videos</h3>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="mt-2"
            aria-label="Upload eco-video"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {videos.map((video) => (
              <video
                key={video.id}
                src={video.url}
                controls
                className="video-player"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;