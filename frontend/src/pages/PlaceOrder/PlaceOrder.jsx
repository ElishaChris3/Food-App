import React, { useContext, useEffect, useState } from "react";
import "./placeorder.css";
import { Storecontext } from "../../StoreContext/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalPrice, token, food_list, cartItem, url } =
    useContext(Storecontext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
    street: "",
    city: "",
    country: "",
    phone: "",
    state: "",
  });

  const OnchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const placeorder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo);
      }
    });

    console.log(orderItems);

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalPrice() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      // const { session_url } = response.data;
      // window.location.replace(session_url);
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalPrice() === 0) {
      navigate("/cart");
    }
  }, []);

  return (
    <>
      <form onSubmit={placeorder} className="place-order">
        <div className="place-order-left">
          <p>Delievery Information</p>
          <div className="multi-fields">
            <input
              name="firstName"
              onChange={OnchangeHandler}
              type="text"
              placeholder="Enter your name"
            />
            <input
              name="lastName"
              onChange={OnchangeHandler}
              type="text"
              placeholder="Enter your Lastname"
            />
          </div>
          <input
            name="email"
            onChange={OnchangeHandler}
            type="email"
            placeholder="Enter your Email Address"
          />
          <input
            name="street"
            onChange={OnchangeHandler}
            type="text"
            placeholder="Street No"
          />
          <div className="multi-fields">
            <input
              name="city"
              onChange={OnchangeHandler}
              type="text"
              placeholder="City"
            />
            <input
              name="state"
              onChange={OnchangeHandler}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields">
            <input
              name="zipcode"
              onChange={OnchangeHandler}
              type="text"
              placeholder="Zip Code"
            />
            <input
              name="country"
              onChange={OnchangeHandler}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            name="phone"
            onChange={OnchangeHandler}
            type="phone"
            placeholder="Phone"
          />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2 className="center">Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <b>Subtotal</b>
                <p>${getTotalPrice()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Delievery Fees</b>
                <b>${2}</b>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalPrice() === 0 ? 0 : getTotalPrice() + 2}</b>
              </div>
              <button type="submit" className="btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
