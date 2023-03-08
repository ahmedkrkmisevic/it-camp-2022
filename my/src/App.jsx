import React from "react";
import "./App.css";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./Templates/Slider/Slider";
import SimplifiedDiv from "./components/SimplifiedDiv/SimplifiedDiv";
import HomeProductPage from "./Templates/ProductHomePage/ProductHomePage";

const App = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <HomeProductPage />
    </>
  );
};
export default App;
