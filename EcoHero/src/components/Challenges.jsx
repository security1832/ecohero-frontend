import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaShareAlt } from "react-icons/fa";

function Challenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, title: "Reduce Plastic Use", points: 100, progress: 60 },
    { id: 2, title: "Plant a Tree", points: 200, progress: 20 },
    { id: 3, title: "Use Public Transport", points: 150, progress: 80 },
  ]);

  const updateProgress = (id) => {
    setChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === id
          ? {
              ...challenge,
              progress: Math.min(challenge.progress + 10, 100),
            }
          : challenge
      )
    );
  };

  const shareChallenge = (title) => {
    if (navigator.share) {
      navigator.share({
        title: `EcoHero Challenge: ${title}`,
        text: `I'm tackling the "${title}" challenge on EcoHero! Join me to save the planet!`,
        url: window.location.href,
      });
    } else {
      alert("Share this challenge: " + title);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Eco Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold dark:text-white">
                {challenge.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Points: {challenge.points}
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => updateProgress(challenge.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  aria-label={`Update progress for ${challenge.title}`}
                >
                  Update Progress
                </button>
                <button
                  onClick={() => shareChallenge(challenge.title)}
                  className="px-4 py-2 bg-ecoBlue text-white rounded hover:bg-ecoBlue/80"
                  aria-label={`Share ${challenge.title}`}
                >
                  <FaShareAlt className="inline" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenges;