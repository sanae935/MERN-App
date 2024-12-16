const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();
app.use(express.json()); 
app.use(cors()); 

const port = process.env.PORT || 5000; 


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});