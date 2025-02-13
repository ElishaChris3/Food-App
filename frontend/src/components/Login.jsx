import React, { useContext, useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { Storecontext } from "../StoreContext/StoreContext";
import { assets } from "../../public/assets";

const Login = ({ setshowLogin }) => {
  const { token, settoken } = useContext(Storecontext);
  const [currState, setcurrState] = useState("Login");
  const url = "https://hamra-admin.vercel.app";

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setshowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="loging">
      <form onSubmit={onLogin} className="login-pop">
        <div className="login-contents">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon} // Replace with actual path
            alt="Close"
          />
        </div>
        <div className="login-input">
          {currState === "Sign Up" ? (
            <input
              name="name"
              onChange={onChangeHandler}
              type="text"
              placeholder="Enter your name"
              value={data.name}
            />
          ) : null}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Enter your Email"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            value={data.password}
          />
        </div>
        <button type="submit" className="login-btn">
          {currState === "Sign Up" ? "Submit" : "Continue"}
        </button>
        <div className="login-checkbox">
          <input required type="checkbox" />
          <p>By continuing, I agree to all Terms and Conditions</p>
        </div>
        {currState === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrState("Login")}>Login</span>
          </p>
        ) : (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
