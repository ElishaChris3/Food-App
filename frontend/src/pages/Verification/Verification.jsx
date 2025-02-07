import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Storecontext } from "../../StoreContext/StoreContext";
import axios from "axios";

const Verification = () => {
  const [search, setsearch] = useSearchParams();
  const success = search.get("success");
  const orderid = search.get("orderId");
  const { url } = useContext(Storecontext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderid,
    });
    if (response.data.success) {
      navigate("/myorder");
    } else {
      navigate("/");
      alert("Payment Failed");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  console.log(success, orderid);
  return <div>Verification</div>;
};

export default Verification;
