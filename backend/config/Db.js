const mongoose = require("mongoose");
// import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;


// const url = "mongodb+srv://mitanshubansal1234:mitanshu5911@cluster0.c73rbv5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"