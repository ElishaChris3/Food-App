const express = require("express");
const { RegisterUser, loginUser, verifyToken } = require("./userController");

const userRouter = express.Router();

userRouter.post("/register", RegisterUser);
userRouter.post("/login", loginUser);
userRouter.get("/verify", verifyToken);

module.exports = userRouter;
