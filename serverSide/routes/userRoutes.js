const express = require("express");
const router = express.Router();
const { registerUser, loginUser ,googleLogin , getAllUsers} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google-login', googleLogin);



router.get('/users', getAllUsers);


const {
  registerUser,
  loginUser,
  googleLogin,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  getUserFromToken,
} = require("../controllers/userController");
const verifyToken = require("../Middlewares/authMiddleware");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-login", googleLogin);
router.get("/profile", verifyToken, getUserProfile);
router.put("/profile", verifyToken, updateUserProfile);
router.post('/logout', logoutUser);
router.get("/get-user", getUserFromToken);
module.exports = router;
