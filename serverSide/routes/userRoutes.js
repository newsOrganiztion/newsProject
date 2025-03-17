// routes/userRoutes.js
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();
 const { getAllUsers,approveUser} = require('../controllers/userController');

router.get('/users', getAllUsers);
router.put('/users/approve/:userId',approveUser);

const {
  registerUser,
  loginUser,
  googleLogin,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  getUserFromToken,
  saveArticleBookmark,
  getUserRoleFromToken,
} = require("../controllers/userController");

const {
  updateUserProfileWithProof,
  uploadProfileProof,
} = require("../controllers/RegisterPublisherController");

const verifyToken = require("../Middlewares/authMiddleware");

router.put("/profileProf",  verifyToken,  uploadProfileProof,  updateUserProfileWithProof);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-login", googleLogin);
router.get("/profile", verifyToken, getUserProfile);
router.put(
  "/profile",
  verifyToken,
  upload.single("profilePicture"),
  updateUserProfile
);
router.post("/logout", logoutUser);
router.get("/get-user", getUserFromToken);
router.get("/get-role", getUserRoleFromToken);
router.post("/save-article", verifyToken, saveArticleBookmark);
module.exports = router;
