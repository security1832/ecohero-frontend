import Navbar from "./Navbar";
import { motion } from "framer-motion";

function EcoMarket() {
  const products = [
    { id: 1, name: "Reusable Water Bottle", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Bamboo Toothbrush", price: 4.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Eco Tote Bag", price: 12.99, image: "https://via.placeholder.com/150" },
  ];

  const addToCart = (id) => {
    alert(`Added product ${id} to cart`);
    // Backend API call to add to cart
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Eco Marketplace
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 text-xl font-semibold dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">${product.price}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcoMarket;