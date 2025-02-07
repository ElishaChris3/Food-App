const FoodsModel = require("./Model");
const fs = require("fs");

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new FoodsModel({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food is Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await FoodsModel.findById(req.body.id);
    fs.unlink(`Uploads/${food.image}`, () => {});
    await FoodsModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "The item is Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

// All Food
const listFood = async (req, res) => {
  try {
    const foods = await FoodsModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed " });
  }
};

// Exporting the functions
module.exports = {
  addFood,
  removeFood,
  listFood,
};
