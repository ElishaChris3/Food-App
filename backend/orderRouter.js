const express = require("express");
const {
  placeOrder,
  verifyOrder,
  userOrder,
  listOrders,
  updateStatus,
} = require("./orderController");

const middleware = require("./auth");
const orderRouter = express.Router();

orderRouter.post("/place", middleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", middleware, userOrder);
orderRouter.get("/listorders", listOrders);
orderRouter.post("/status", updateStatus);
module.exports = orderRouter;
