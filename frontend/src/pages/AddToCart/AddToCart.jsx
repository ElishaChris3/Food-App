import React, { useContext } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Storecontext } from "../../StoreContext/StoreContext";

const AddToCart = () => {
  const { cartItem, food_list, url, RemoveFromCart, getTotalPrice } =
    useContext(Storecontext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="car-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((items, index) => {
          if (cartItem[items._id] > 0) {
            return (
              <>
                <div className="cart-items-title">
                  <img src={url + "/images/" + items.image}></img>
                  <p>{items.name}</p>
                  <p>${items.price}</p>
                  <p>{cartItem[items._id]}</p>
                  <p>${items.price} </p>
                  <p
                    onClick={() => RemoveFromCart(items._id)}
                    className="cancel-item"
                  >
                    x
                  </p>
                </div>
              </>
            );
          }
        })}
      </div>

      <hr />
      <div className="cart-bottom">
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
              <b>${getTotalPrice() === 0 ? 0 : 2}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalPrice() === 0 ? 0 : getTotalPrice() + 2}</b>
            </div>
            <button onClick={() => navigate("/placeorder")} className="btn">
              Proceed to Checkout
            </button>
          </div>
        </div>

        <div className="cart-promo">
          <div>
            <p>If you have a promocode , Enter it here</p>
            <div className="promocode-input">
              <input type="text" placeholder="Enter Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
