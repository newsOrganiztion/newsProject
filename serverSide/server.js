require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;  


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});


app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
