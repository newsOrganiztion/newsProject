const express = require('express');
const router = express.Router();
const { registerUser, loginUser ,googleLogin , getAllUsers} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google-login', googleLogin);



router.get('/users', getAllUsers);


module.exports = router;
