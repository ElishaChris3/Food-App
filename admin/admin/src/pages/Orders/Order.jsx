import React, { useEffect, useState } from "react";
import "./order.css";
import axios from "axios";
import { assets } from "../../assets/assets";

const Order = () => {
  const [data, setData] = useState([]);

  const url = import.meta.env.VITE_backend_link;

  const fetchOrder = async () => {
    const response = await axios.get(`${url}/api/order/listorders`);
    setData(response.data.data);
    console.log(response.data.data);
  };

  const updateStatus = async (event, orderId) => {
    const response = await axios.post(`${url}/api/order/status`, {
      orderId,
      status: event.target.value,
    });

    if (response.data.success) {
      await fetchOrder();
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="order add">
      <h3>Orders</h3>

      <div className="orders-list">
        {data.map((order, index) => {
          return (
            // Make sure to return the JSX
            <div className="order-item" key={index}>
              <img src={assets.parcel_icon} alt="" />
              <div className="order-item-food">
                <p>
                  {order.items
                    .map((food, index) => {
                      // Handling the items display
                      return `${food.name} x ${food.quantity}`;
                    })
                    .join(", ")}
                </p>

                <select
                  onChange={(event) => updateStatus(event, order._id)}
                  value={order.status}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
