import React, { useContext, useEffect, useState } from "react";
import "./myorders.css";
import { Storecontext } from "./../../StoreContext/StoreContext";
import axios from "axios";
import { assets } from "../../../public/assets";

const MyOrders = () => {
  const { url, token } = useContext(Storecontext);
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    const response = await axios.post(
      url + "/api/order/userorder",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
    console.log("yo");
  };

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>MyOrders</h2>
      <div className="container">
        {data.map((orders, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {orders.items.map((item, id) => {
                  return item.name + "x" + item.quantity + " ";
                })}
              </p>

              <p>${orders.amount}.00</p>
              <p>Items : {orders.items.length}</p>
              <p>
                <b>{orders.status}</b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
