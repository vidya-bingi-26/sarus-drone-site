import mongoose from "mongoose";

const droneSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    information: { type: String, required: true },
    category: { type: String, enum: ["commercial", "military", "recreational"], required: true },
    image: { type: String },
    mainPrice: { type: Number, required: true },
    discountedPrice: { type: Number, required: true }
  },
  { timestamps: true }
);

export const Drone = mongoose.model("Drone", droneSchema);

