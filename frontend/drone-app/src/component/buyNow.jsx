import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Drone1 from '../assets/dron1.png';

const products = [
  {
    id: 1,
    name: "Sarus Pro X1",
    price: "$1,299",
    description: "Professional-grade drone with 4K HDR camera and 40min flight time",
    image: Drone1,
    features: ["4K HDR Camera", "40min Flight Time", "5km Range", "Obstacle Avoidance"]
  },
  {
    id: 2,
    name: "Sarus Lite",
    price: "$799",
    description: "Compact drone with 1080p camera perfect for beginners",
    image: Drone1,
    features: ["1080p Camera", "25min Flight Time", "2km Range", "Foldable Design"]
  },
  {
    id: 3,
    name: "Sarus Industrial",
    price: "$2,499",
    description: "Heavy-lift drone for commercial applications",
    image: Drone1,
    features: ["10kg Payload", "60min Flight Time", "RTK GPS", "Weather Resistant"]
  }
];

function BuyNow() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <motion.header 
        className="py-6 px-10 flex justify-between items-center border-b border-gray-700"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="text-2xl font-semibold text-green-400">Sarus Aerospace</Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/products" className="hover:text-green-400 transition">Products</Link>
          <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
        </nav>
      </motion.header>

      <main className="px-10 py-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          <h1 className="text-4xl font-semibold mb-2">Our <span className="text-green-400">Products</span></h1>
          <p className="text-gray-300">Premium drones engineered for performance and reliability.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div key={product.id} className="bg-gray-800 rounded-lg shadow-lg hover:shadow-green-400/20 transition transform hover:scale-105" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-400">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">✓ {feature}</li>
                  ))}
                </ul>
                <motion.button className="w-full py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Add to Cart</motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
          <h2 className="text-2xl font-semibold mb-4">Need help choosing the right drone?</h2>
          <motion.button className="px-6 py-3 border-2 border-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Contact Our Experts</motion.button>
        </motion.div>
      </main>

      <footer className="mt-16 py-6 px-10 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 Sarus Aerospace. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link to="/support" className="text-gray-400 hover:text-white transition">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BuyNow;
