import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-green-600"
      >
        EcoHero
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-gray-700 max-w-2xl"
      >
        Join millions in saving the planet. Complete eco-challenges, earn rewards, and make a real impact!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold"
      >
        Get Started
      </motion.button>
    </div>
  );
}

export default Landing;