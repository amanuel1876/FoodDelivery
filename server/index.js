import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";
import FoodRoutes from "./routes/Food.js";

// Load environment variables from .env file
dotenv.config();

// Validate required environment variables
const { MONGODB_URL, PORT, JWT_SECRET } = process.env;
if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined in the environment variables.");
}
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

// Set up routes
app.use("/api/user/", UserRoutes);
app.use("/api/food/", FoodRoutes);

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Root route
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from AZD",
  });
});

// Connect to MongoDB
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.error("Failed to connect with MongoDB");
      console.error(err);
    });
};

// Start server
const startServer = async () => {
  try {
    connectDB();
    const port = PORT || 8080; // Default to 8080 if PORT is not defined
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
