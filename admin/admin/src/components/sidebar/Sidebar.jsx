import React from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-opt">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-opt">
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </NavLink>
        {/* <NavLink to="/order" className="sidebar-opt">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Sidebar;
