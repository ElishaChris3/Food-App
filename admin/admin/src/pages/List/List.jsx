import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const [list, setlist] = useState([]);
  //const url = "https://food-app-l324.vercel.app";
  const url = import.meta.VITE_backend_link;

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/foods/list`);
    console.log(response.data);
    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  const removeFood = async (foodid) => {
    const response = await axios.post(`${url}/api/foods/remove`, {
      id: foodid,
    });
    await fetchlist();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="list add flex-col">
      <p>All foods list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
