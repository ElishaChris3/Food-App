import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AddToCart from "./pages/AddToCart/AddToCart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footers from "./components/Footers";
import Login from "./components/Login";
import Verification from "./pages/Verification/Verification";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setshowLogin={setshowLogin} /> : <></>}
      <div className="App">
        <Navbar setshowLogin={setshowLogin}></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<AddToCart></AddToCart>}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="/verify" element={<Verification />}></Route>
          <Route path="/myorders" element={<MyOrders />}></Route>
        </Routes>
      </div>
      <Footers />
    </>
  );
};

export default App;
