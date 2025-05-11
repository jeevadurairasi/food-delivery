const express = require('express');
const multer = require('multer');
const path = require('path');
const { registerUser } = require('../controllers/userController'); // Import the controller

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Define the signup route
router.post('/signup', upload.single('profilePhoto'), registerUser);

module.exports = router;