require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const journalistRoutes = require("./routes/journalistRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.use("/api/journalist", journalistRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
