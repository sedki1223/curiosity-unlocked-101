import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  await mongoose.connect(mongoURI);

  console.log("MongoDB connected.");
}
