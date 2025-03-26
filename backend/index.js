import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import droneRoutes from "./routes/cardRouts.js"; 
import { verifyToken } from "./middleWare/authUser.js";
import { logout, login, register, myProfile } from "./controll/usercontrol.js";


dotenv.config();

const app = express();
const MONGO_URI = process.env.MONGO_URI;
const FRONTEND_URL = process.env.FRONTEND_URL;
const PORT = process.env.PORT || 5000;

if (!MONGO_URI || !FRONTEND_URL) {
  console.error("Missing environment variables. Please check .env file.");
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true, // Allows sending cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 15000,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully.");

    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Stop the server if the database connection fails
  });

// USER Routes
app.use("/api/users", userRoute);
app.get("/api/users/logout", verifyToken, logout);
app.post("/api/users/login", login);
app.post("/api/users/register", register);

// DRONE CARD Routes
app.use("/api/drones",droneRoutes ); 

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error details:", err);
  res.status(500).json({ message: "Something went wrong!" });
});
