const User = require('../models/userModel'); // Import the user model

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, userid, phone, email, address, password } = req.body;

    // Check for missing fields
    if (!username || !userid || !phone || !email || !address || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Check if User ID already exists
    const existingUserById = await User.findOne({ userid });
    if (existingUserById) {
      return res.status(400).json({ message: 'User ID already exists!' });
    }

    // Check if Phone Number already exists
    const existingUserByPhone = await User.findOne({ phone });
    if (existingUserByPhone) {
      return res.status(400).json({ message: 'Phone number already exists!' });
    }

    // Create new user document
    const newUser = new User({
      username,
      userid,
      phone,
      email,
      address,
      password,
      profilePhoto: req.file ? `/uploads/${req.file.filename}` : null, // Save file path
    });

    // Save user to MongoDB
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('Error registering user:', err); // Log the error
    res.status(400).json({ message: 'Error registering user', error: err.message });
  }
};