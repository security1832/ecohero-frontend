import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landing() {
  const features = [
    { title: "EcoReels", desc: "Create short eco-videos with AR filters.", path: "/reels" },
    { title: "Chat", desc: "Connect with eco-warriors worldwide.", path: "/chat" },
    { title: "Live Streams", desc: "Join live eco-events.", path: "/live" },
    { title: "Stories", desc: "Share your eco-journey.", path: "/stories" },
    { title: "Eco Player", desc: "Listen to eco-podcasts and music.", path: "/player" },
    { title: "Marketplace", desc: "Shop sustainable products.", path: "/market" },
  ];

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 flex flex-col items-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-green-600 dark:text-green-400"
      >
        EcoHero
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl text-center"
      >
        Join millions to save the planet with challenges, videos, chats, and more!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700"
        aria-label="Get started with EcoHero"
      >
        Get Started
      </motion.button>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.desc}</p>
            <Link
              to={feature.path}
              className="mt-4 inline-block text-green-600 dark:text-green-400 hover:underline"
            >
              Explore
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Landing;