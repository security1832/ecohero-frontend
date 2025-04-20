import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Challenges() {
  const challenges = [
    { id: 1, title: "Reduce Plastic Use", points: 100, progress: 60 },
    { id: 2, title: "Plant a Tree", points: 200, progress: 20 },
    { id: 3, title: "Use Public Transport", points: 150, progress: 80 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600">Eco Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              className="bg-white p-6 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{challenge.title}</h3>
              <p className="text-gray-600">Points: {challenge.points}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
                Update Progress
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenges;