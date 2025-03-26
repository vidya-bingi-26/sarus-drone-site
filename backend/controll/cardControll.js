import { Drone } from "../models/cardData.js"; 

// Create a new drone
export const createDrone = async (req, res) => {
  try {
    const { productId, title, information, category, image, mainPrice, discountedPrice } = req.body;

    // Validate incoming data
    if (!productId || !title || !information || !category || !mainPrice || !discountedPrice) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if productId already exists
    const existingDrone = await Drone.findOne({ productId });
    if (existingDrone) {
      return res.status(400).json({ message: "Product ID already exists." });
    }

    // Create and save the new drone
    const drone = new Drone({ productId, title, information, category, image, mainPrice, discountedPrice });
    await drone.save();

    res.status(201).json({ message: "Drone created successfully.", drone });
  } catch (error) {
    console.error("Error creating drone:", error);
    res.status(500).json({ message: "Error creating drone.", error: error.message });
  }
};

// Get all drones
export const getAllDrones = async (req, res) => {
  try {
    const drones = await Drone.find();

    if (!drones.length) {
      return res.status(404).json({ message: "No drones found." });
    }

    res.status(200).json(drones);
  } catch (error) {
    console.error("Error fetching drones:", error);
    res.status(500).json({ message: "Error fetching drones.", error: error.message });
  }
};

// Get drones by category
export const getDronesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const drones = await Drone.find({ category });

    if (!drones.length) {
      return res.status(404).json({ message: `No drones found in category: ${category}` });
    }

    res.status(200).json(drones);
  } catch (error) {
    console.error("Error fetching drones by category:", error);
    res.status(500).json({ message: "Error fetching drones by category.", error: error.message });
  }
};

// Update a drone
export const updateDrone = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedDrone = await Drone.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedDrone) {
      return res.status(404).json({ message: "Drone not found." });
    }

    res.status(200).json({ message: "Drone updated successfully.", updatedDrone });
  } catch (error) {
    console.error("Error updating drone:", error);
    res.status(500).json({ message: "Error updating drone.", error: error.message });
  }
};

// Delete a drone
export const deleteDrone = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDrone = await Drone.findByIdAndDelete(id);

    if (!deletedDrone) {
      return res.status(404).json({ message: "Drone not found." });
    }

    res.status(200).json({ message: "Drone deleted successfully." });
  } catch (error) {
    console.error("Error deleting drone:", error);
    res.status(500).json({ message: "Error deleting drone.", error: error.message });
  }
};

// Get one single drone by ID
export const getOneDrone = async (req, res) => {
  try {
    const { id } = req.params;
    const drone = await Drone.findById(id);

    if (!drone) {
      return res.status(404).json({ message: "Drone not found." });
    }

    res.status(200).json(drone);
  } catch (error) {
    console.error("Error fetching drone:", error);
    res.status(500).json({ message: "Error fetching drone.", error: error.message });
  }
};
