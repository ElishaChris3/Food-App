import React, { useContext } from "react";
import { assets } from "../../public/assets";
import "./fooditem.css";
import { Storecontext } from "../StoreContext/StoreContext";

const FoodItem = ({ id, name, image, description, price }) => {
  const { cartItem, AddCartItems, RemoveFromCart, url } =
    useContext(Storecontext);

  return (
    <div className="fooditem">
      <div className="food-item-container">
        <img
          className="food-item-img"
          src={url + "/images/" + image}
          alt=""
        ></img>
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => AddCartItems(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => RemoveFromCart(id)}
            ></img>

            <p>{cartItem[id]}</p>
            <img
              onClick={() => AddCartItems(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="name">{name}</p>
          <img src={assets.rating_starts}></img>
        </div>
        <p className="desc">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
