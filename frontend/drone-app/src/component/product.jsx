import { useEffect, useState } from "react";
import axios from "axios";

const categories = ["all", "commercial", "military", "recreational"];

const DroneShop = () => {
  const [drones, setDrones] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all drones from the backend
  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/drones/all");
        setDrones(response.data);
      } catch (err) {
        setError("Error fetching drones.");
      } finally {
        setLoading(false);
      }
    };

    fetchDrones();
  }, []);

  // Filter drones based on category
  const filteredDrones = filter === "all" ? drones : drones.filter((drone) => drone.category === filter);

  return (
    <div className="bg-slate-600 min-h-screen p-6 text-center">
      <header className="bg-black text-white py-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Drone Shop</h1>
      </header>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
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

      {/* Loading & Error Handling */}
      {loading && <p className="text-xl font-semibold text-gray-700">Loading drones...</p>}
      {error && <p className="text-red-500 font-semibold">{error}</p>}

      {/* Drone Cards */}
      {!loading && !error && filteredDrones.length === 0 && (
        <p className="text-lg font-semibold text-gray-600">No drones found in this category.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDrones.map((drone) => (
          <div key={drone.productId} className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition">
            <img src={drone.image} alt={drone.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-3">{drone.title}</h2>
            <p className="text-gray-600 my-2">{drone.information}</p>
            <span className="text-green-600 font-bold text-lg block mb-3">
              ₹{drone.discountedPrice} <span className="line-through text-gray-500">₹{drone.mainPrice}</span>
            </span>
            <div className="flex justify-between gap-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Buy Now</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneShop;
