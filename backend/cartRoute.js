const express = require("express");
const { addtoCart, removeFromCart, getCart } = require("./cartController");
const authMiddleware = require("./auth");
const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addtoCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

module.exports = cartRouter;
