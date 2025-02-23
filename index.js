const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routers/userRouters");
const shipmentRouter = require("./routers/shipmentRouters");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.post("/api/users/register", (req, res) => {
  // Registration logic here
  res.send("User registered successfully");
});

app.post("/api/users/login", (req, res) => {
  // Registration logic here
  res.send("User successfully login");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to bestway Logistic Company Backend");
});

app.use("/api/user", userRouter);

app.use("/api/shipments", shipmentRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
