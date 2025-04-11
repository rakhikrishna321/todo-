import express from "express";
import dotenv from "dotenv"; // Import dotenv FIRST
dotenv.config(); // Load environment variables immediately after import
import mongoose from "mongoose";
import cors from "cors";
import './connection.js';
import auth from '../src/routes/authRoutes.js';

// Check if JWT_SECRET is loaded
console.log("Loaded JWT_SECRET:", process.env.JWT_SECRET); 

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Routes
app.use("/auth", auth);

// Port
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
