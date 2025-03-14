// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const userRoutes = require("./routes/userRoutes");
// const articleRoutes = require('./routes/articleRoutes');
// const paymentRoutes = require("./routes/paymentRoutes");



// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173", 
//     credentials: true,
//   })
// );

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// app.use("/api/users", userRoutes);
// app.use('/', articleRoutes);
// app.use("/api", paymentRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const cookieParser = require("cookie-parser");
const journalistRoutes = require("./routes/journalistRoutes");
const contactRoutes = require("./routes/contactRoutes");

const savedArticles = require("./routes/savedArticlesRoute");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // يجب أن تكون true
  })
);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/artic", savedArticles);
app.use("/uploads", express.static("uploads"));

app.use("/api/journalist", journalistRoutes);
app.use("/api/users", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
