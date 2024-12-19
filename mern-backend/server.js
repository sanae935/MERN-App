const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
app.use(express.json()); 
app.use(cors()); 

const itemsRouter = require('./routes/items');
app.use(itemsRouter);

const port = process.env.PORT || 5000; 

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});