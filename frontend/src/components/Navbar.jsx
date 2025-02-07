import React, { useContext, useState } from "react";
import "../components/navbar.css";
import { assets } from "./../../public/assets";
import { Link, useNavigate } from "react-router-dom";
import { Storecontext } from "../StoreContext/StoreContext";
const Navbar = ({ setshowLogin }) => {
  const [actives, setactives] = useState("");
  const { token, settoken } = useContext(Storecontext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    settoken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          {" "}
          <img className="logo" src={assets.logo} alt="" />
        </Link>
      </div>

      <div>
        <ul className="list">
          <Link to="/">
            <li
              onClick={() => {
                setactives("home");
              }}
              className={actives === "home" ? "activeclass" : ""}
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => {
              setactives("Contact Us");
            }}
            className={actives === "Contact Us" ? "activeclass" : ""}
          >
            Contact Us
          </li>
          <li
            onClick={() => {
              setactives("products");
            }}
            className={actives === "products" ? "activeclass" : ""}
          >
            Products
          </li>
        </ul>
      </div>

      <div className="right-contents">
        <img src={assets.search_icon} alt="search" />
        <div>
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon}></img>{" "}
          </Link>
        </div>

        {!token ? (
          <button onClick={() => setshowLogin(true)}>Sign up</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={() => logout()}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
