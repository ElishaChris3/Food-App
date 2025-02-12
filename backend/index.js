const express = require("express");
const connectDB = require("./Config");
const foodRoute = require("./Route");
const cartRouter = require("./cartRoute");
const cors = require("cors");
const userRouter = require("./userRoute");
const orderRouter = require("./orderRouter");

require("dotenv").config();

const port = 4000;
const AppJs = express();

console.log("DB URL: " + process.env.MONGO_URL);

// ✅ Enable CORS for All Origins
AppJs.use(
  cors({
    origin: "*", // Allows requests from any domain
    methods: "GET, POST, OPTIONS",
    allowedHeaders: "Content-Type",
  })
);

AppJs.use(express.json()); // Enable JSON body parsing

// ✅ Handle Preflight Requests (OPTIONS)
AppJs.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

// ✅ Connect to Database
connectDB();

// ✅ Define API Routes
AppJs.use("/api/user", userRouter);
AppJs.use("/api/cart", cartRouter);
AppJs.use("/api/order", orderRouter);
AppJs.use("/api/foods", foodRoute);

// ✅ Test Route
AppJs.get("/", (req, res) => {
  res.send("API is Working");
  console.log("Hello, API is running!");
});

// ✅ Start Server
AppJs.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
