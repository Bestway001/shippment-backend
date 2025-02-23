const User = require("../model/user");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
 try {
   // Check if email already exists
   const existingUser = await User.findOne({ email });
   if (existingUser) {
     return res.status(400).json({ message: "Email already in use." });
   }

   // Create new user
   const newUser = new User({ email, password });
   await newUser.save();

   res.status(201).json({ message: "User registered successfully." });
 } catch (error) {
   console.error("Error during registration:", error);
   res.status(500).json({ message: "Internal server error." });
 }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
