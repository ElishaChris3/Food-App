const express = require("express");
const foodRouter = express.Router();
const multer = require("multer");
const { addFood, removeFood, listFood } = require("./Controller");

const storage = multer.diskStorage({
  destination: "./",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/list", listFood);

module.exports = foodRouter;
