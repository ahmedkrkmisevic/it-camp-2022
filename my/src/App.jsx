import React from "react";
import "./App.css";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./Templates/Slider/Slider";
import SimplifiedDiv from "./components/SimplifiedDiv/SimplifiedDiv";
import ProductsHomePage from "./Templates/ProductsHomePage/ProductsHomePage";
import SuggestedCarousel from "./Templates/SuggestedCarousel/SuggestedCarousel";

const App = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <ProductsHomePage />
      <SuggestedCarousel />
    </>
  );
};

export default App;
