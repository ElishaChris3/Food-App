const FoodsModel = require("./Model");
const fs = require("fs");
const path = require("path");

// ✅ Add Food
const addFood = async (req, res) => {
  try {
    let image_filename = req.file ? req.file.filename : "default.jpg"; // ✅ Handle missing image

    const food = new FoodsModel({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      image: image_filename,
    });

    await food.save();
    res.status(201).json({ success: true, message: "Food is Added" });
  } catch (error) {
    console.error("Add Food Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ Remove Food
const removeFood = async (req, res) => {
  try {
    const food = await FoodsModel.findById(req.body.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }

    // ✅ Check if the image exists before deleting
    const imagePath = path.join(__dirname, "uploads", food.image);
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => {
        if (err) console.error("Image deletion error:", err);
      });
    }

    await FoodsModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "The item is Removed" });
  } catch (error) {
    console.error("Remove Food Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ List All Food
const listFood = async (req, res) => {
  try {
    const foods = await FoodsModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error("List Food Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch foods" });
  }
};

// ✅ Exporting functions
module.exports = {
  addFood,
  removeFood,
  listFood,
};
