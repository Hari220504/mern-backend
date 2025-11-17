require('dotenv').config();
const mongoose = require('mongoose');


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Connected to MongoDB Successfully!");
  } catch (e) {
    console.error("❌ MongoDB Connection Failed:", e.message);
  }
};

module.exports = { connectToMongoDB };
