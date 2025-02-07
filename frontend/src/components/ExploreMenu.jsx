import React from "react";
import "./explore.css";
import { menu_list } from "../../public/assets";
const ExploreMenu = ({ category, setcategory }) => {
  console.log(category);
  return (
    <div className="explore">
      <h1>Explore Our Menu</h1>
      <p>
        Here are some Delicious Apetites for the Hunger Younger and Specially
        the Oldie Boldie
      </p>
      <div className="explore-items">
        {menu_list.map((item, index) => {
          return (
            <>
              <div
                key={index}
                onClick={() => setcategory(item.menu_name)}
                className="explore-item-card"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            </>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
