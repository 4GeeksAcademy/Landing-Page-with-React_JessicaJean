import React from "react";
import Jumbotron from "../jumbotron";
import Navbar from "../navbar";
import Card from "../card";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Jumbotron />
      <Card />
    </div>
  );
};

export default Home;
