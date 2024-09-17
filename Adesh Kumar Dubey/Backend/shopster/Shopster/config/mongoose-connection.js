// config/mongoose-connection.js

const mongoose = require("mongoose");
const debug = require("debug")("development:mongoose");
require("dotenv").config();

const URL = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    debug("MongoDB connected successfully");
  } catch (err) {
    debug("MongoDB connection error:", err.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
