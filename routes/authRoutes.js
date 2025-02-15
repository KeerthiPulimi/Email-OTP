

const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authmiddleware'); // Correct import

const router = express.Router();

router.post('/register', authController.register);
router.post('/verify-otp', authController.verifyOTP);
router.post('/resend-otp', authController.resendOTP);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/dashboard', authMiddleware, authController.dashboard); // Protected route

module.exports = router;
