const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectToMongoDB } = require('./db');
const traineeRoutes = require('./routes/trainees-routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectToMongoDB();

// Routes
app.use('/api/v1/trainees', traineeRoutes);

// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

console.log("ENV MONGODB_URL:", process.env.MONGODB_URL);
