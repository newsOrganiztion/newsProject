const express = require('express');
const router = express.Router();
const { registerUser, loginUser ,googleLogin, getUserProfile } = require('../controllers/userController');
const verifyToken = require('../Middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google-login', googleLogin);
router.get('/profile', verifyToken, getUserProfile);  // إضافة الميدلوير للتحقق من التوكن

module.exports = router;
