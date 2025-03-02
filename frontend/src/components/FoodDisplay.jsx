import React, { useContext } from "react";
import "./fooddisplay.css";
import { Storecontext } from "../StoreContext/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);

  return (
    <div id="foods" className="food-display">
      <h1>Top Dishes Near You , Order and Grab them</h1>
      <div className="food-display-item">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                description={item.description}
                category={item.category}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
