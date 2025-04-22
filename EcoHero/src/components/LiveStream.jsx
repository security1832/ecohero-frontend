import Navbar from "../layout/NavBar";
import ReactPlayer from "react-player";

function LiveStream() {
  // Mock live stream URL (replace with WebRTC or backend streaming service)
  const liveUrl = "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Live Eco Events
        </h2>
        <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <ReactPlayer
            url={liveUrl}
            playing
            controls
            width="100%"
            height="auto"
            className="video-player"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold dark:text-white">
              Live Tree Planting Event
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Join us live to plant trees and make a difference!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveStream;