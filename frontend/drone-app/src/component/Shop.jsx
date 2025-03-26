import { useState } from "react";

const products = [
  { id: 1, category: "battery", name: "Battery Pack", desc: "High-performance drone battery.", price: "999", img: "/drone2.png" },
  { id: 2, category: "motor", name: "Drone Motor", desc: "Powerful brushless motor.", price: "1499", img: "/drone2.png" },
  { id: 3, category: "wire", name: "Wiring Kit", desc: "High-quality drone wiring.", price: "499", img: "/drone2.png" },
  { id: 4, category: "propeller", name: "Drone Propellers", desc: "Lightweight and durable propellers.", price: "799", img: "/drone2.png" },
  { id: 5, category: "body", name: "Drone Body Frame", desc: "Lightweight and strong frame.", price: "1999", img: "/drone2.png" },
];

import React from "react";

function Shop() {  // ✅ Fixed Component Name
  const [filter, setFilter] = useState("all");

  const filteredProducts = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="bg-gray-100 min-h-screen p-6 text-center">
      <header className="bg-black text-white py-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Drone Shop</h1>
      </header>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {["all", "battery", "motor", "wire", "propeller", "body"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition ${
              filter === category ? "bg-green-600 text-white" : "bg-gray-800 text-white hover:bg-gray-600"
            }`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition">
            <img src={product.img} alt={`${product.name} image`} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600 my-2">{product.desc}</p>
            <span className="text-green-600 font-bold text-lg block mb-3">₹{product.price}</span>
            <div className="flex justify-between gap-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Buy Now</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
