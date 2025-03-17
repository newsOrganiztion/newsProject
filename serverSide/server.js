const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const cookieParser = require("cookie-parser");
const contactRoutes = require("./routes/contactRoutes");
const admainRoutes = require("./routes/admainRoutes");
const savedArticles = require("./routes/savedArticlesRoute");
const homeArticles = require("./routes/HomeRoutes");
const commentRoutes = require("./routes/commentRoutes");
const paymentRoutes = require("./routes/paymentRoutes");


dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
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
app.use("/api/article",admainRoutes)
// app.use("/api/journalist", journalistRoutes);

app.use('/api', paymentRoutes);

app.use("/api/users", contactRoutes);
app.use("/api/home-articles", homeArticles);
app.use("/api/comments", commentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
