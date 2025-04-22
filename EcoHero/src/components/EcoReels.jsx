import { useState } from "react";
import Navbar from "../layout/NavBar";
import ReactPlayer from "react-player";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";

function EcoReels() {
  const [reels, setReels] = useState([
    {
      id: 1,
      url: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
      user: "EcoCreator",
      likes: 120,
      comments: 45,
    },
  ]);

  const likeReel = (id) => {
    setReels((prev) =>
      prev.map((reel) =>
        reel.id === id ? { ...reel, likes: reel.likes + 1 } : reel
      )
    );
  };

  const shareReel = (id) => {
    if (navigator.share) {
      navigator.share({
        title: "EcoHero Reel",
        text: "Check out this eco-reel on EcoHero!",
        url: window.location.href,
      });
    } else {
      alert(`Share reel with ID: ${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          EcoReels
        </h2>
        <div className="mt-6 space-y-8">
          {reels.map((reel) => (
            <div key={reel.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Posted by {reel.user}
              </p>
              <ReactPlayer
                url={reel.url}
                controls
                width="100%"
                height="auto"
                className="video-player"
              />
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => likeReel(reel.id)}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-red-600"
                >
                  <FaHeart className="mr-1" /> {reel.likes}
                </button>
                <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-green-600">
                  <FaComment className="mr-1" /> {reel.comments}
                </button>
                <button
                  onClick={() => shareReel(reel.id)}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-ecoBlue"
                >
                  <FaShareAlt className="mr-1" /> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcoReels;