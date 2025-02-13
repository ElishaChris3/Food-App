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

console.log("DB url : " + process.env.MONGO_URL);

AppJs.use(cors());
AppJs.use(express.json());

AppJs.use("/api/user", userRouter);
AppJs.use("/api/cart", cartRouter);
AppJs.use("/api/order", orderRouter);
AppJs.use("/api/foods", foodRoute);
connectDB();

AppJs.get("/", (req, res) => {
  res.send("API is Workingasdasd");
  console.log("hello");
});

AppJs.listen(port, () => {
  console.log("your port is : " + port);
});
