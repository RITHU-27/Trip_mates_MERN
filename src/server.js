const express = require("express");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const signin = require('./models/signin');
const app = express();
const PORT = 7777;
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/trip_mates')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    const file_name =
      uniqueSuffix + path.extname(file.originalname);

    cb(null, file_name);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.post("/upload", upload.single("myFile"), (req, res) => {
  try {
    res.status(200).json({
      message: "File uploaded successfully!",
      file: req.file,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  try {
    console.log('Signup request received');
    console.log('Request body:', req.body);
    
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await signin.findOne({ email });
    if (existingUser) {
      console.log('User already exists with this email');
      return res.status(400).json({ error: "User already exists with this email" });
    }
    
    // Create new user
    const newUser = await signin.create({
      username,
      email,
      password
    });
    
    res.status(201).json({ 
      message: "Signup successful!",
      user: newUser
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: "Signup failed. Please try again." });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    console.log('Login request received');
    console.log('Request body:', req.body);
    
    const { username, email, password } = req.body;
    
    console.log(`Looking for user with email: ${email}`);
    console.log(`Password provided: ${password}`);
    
    // Find user by email
    const user = await signin.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    
    // Check password (simple comparison for now)
    if (user.password !== password) {
      return res.status(400).json({ error: "Incorrect password" });
    }
    
    res.status(200).json({ 
      message: "Login successful!",
      user: user
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log("Server running");
});