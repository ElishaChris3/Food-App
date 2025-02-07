import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "./../../components/FoodDisplay";
const Home = () => {
  const [category, setcategory] = useState("all");
  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />{" "}
    </div>
  );
};

export default Home;
