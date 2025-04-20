import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Stories() {
  const [stories, setStories] = useState([
    {
      id: 1,
      user: "EcoUser",
      image: "https://via.placeholder.com/300x500?text=Eco+Story",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Eco Stories
        </h2>
        <div className="mt-6 flex space-x-4 overflow-x-auto">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow w-40"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={story.image}
                alt={`${story.user}'s story`}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <p className="p-2 text-center dark:text-white">{story.user}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;