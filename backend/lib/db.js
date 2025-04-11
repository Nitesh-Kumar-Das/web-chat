import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI); // Removed deprecated options
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};