import express from "express";
import {
  createDrone,
  getAllDrones,
  getDronesByCategory,
  updateDrone,
  deleteDrone,
  getOneDrone,
} from "../controll/cardControll.js"; // Ensure correct import path

const router = express.Router();

// Create a new drone
router.post("/create", createDrone);

// Get all drones
router.get("/all", getAllDrones);

// Get drones by category
router.get("/category/:category", getDronesByCategory);

// Get a single drone by ID
router.get("/:id", getOneDrone);

// Update a drone
router.put("/update/:id", updateDrone);

// Delete a drone
router.delete("/delete/:id", deleteDrone);

export default router;
