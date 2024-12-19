const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env file

const app = express();

// CORS configuration
const corsOptions = {
    origin: 'https://mern-frontend.onrender.com',  // Your front-end deployed URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};
app.use(cors(corsOptions));  // CORS should be applied before other middlewares

// Middleware for parsing JSON requests
app.use(express.json()); 

// API Routes
const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);  // Prefix routes with /api/items

const port = process.env.PORT || 5000;

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});