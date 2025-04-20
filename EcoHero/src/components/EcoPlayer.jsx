import Navbar from "./Navbar";
import ReactPlayer from "react-player";

function EcoPlayer() {
  const playlist = [
    {
      id: 1,
      title: "Eco Podcast: Sustainable Living",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Green Vibes Playlist",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Eco Player
        </h2>
        <div className="mt-6 space-y-4">
          {playlist.map((track) => (
            <div
              key={track.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold dark:text-white">
                {track.title}
              </h3>
              <ReactPlayer
                url={track.url}
                controls
                width="100%"
                height="50px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcoPlayer;