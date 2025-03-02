const Stripe = require("stripe");
const orderModel = require("./orderModel");
const userModel = require("./userModel");
require("dotenv").config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//console.log(stripe);

const FRONTEND_URL = "http://localhost:5173";

const placeOrder = async (req, res) => {
  try {
    // Save new order to the database
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();

    // Clear the user's cart
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Prepare line items for Stripe
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80, // Assuming prices are in INR
      },
      quantity: item.quantity,
    }));

    // Add delivery charges
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80, // Delivery charge example (e.g., ₹160.00)
      },
      quantity: 1,
    });

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${FRONTEND_URL}/myorders?success=true&orderId=${newOrder._id}`,
      cancel_url: `${FRONTEND_URL}/?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error(error);
    res.json({ error: "Failed to place order" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  if (success == "true") {
    await orderModel.findByIdAndUpdate(orderId, { payment: true });
    res.json({ success: true, message: "Paid" });
  } else {
    await orderModel.findByIdAndDelete(orderId);
    res.json({ success: false, message: "not Paid" });
  }
};

const userOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, msg: error });
  }
};

// List all the orders in the Admin Panel

const listOrders = async (req, res) => {
  try {
    const listAllOrders = await orderModel.find({});
    res.json({ success: true, data: listAllOrders });
  } catch (error) {
    res.json({ success: false, msg: error });
  }
};

// Api for updating the order Status

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Updated" });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

module.exports = {
  placeOrder,
  verifyOrder,
  userOrder,
  listOrders,
  updateStatus,
};
