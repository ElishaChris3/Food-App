const express = require("express");
const { placeOrder, verifyOrder, userOrder } = require("./orderController");

const middleware = require("./auth");
const orderRouter = express.Router();

orderRouter.post("/place", middleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userOrder", middleware, userOrder);

module.exports = orderRouter;
