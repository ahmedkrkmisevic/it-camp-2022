import React from "react";
import "./App.css";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./Templates/Slider/Slider";
import SimplifiedDiv from "./components/SimplifiedDiv/SimplifiedDiv";
import ProductsHomePage from "./Templates/ProductsHomePage/ProductsHomePage";
import ArticleCard from "./Templates/ArticleCard/ArticleCard";
import ArticlesHomePage from "./Templates/ArticlesHomePage/ArticleHomePage";

const App = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <ProductsHomePage />
      <ArticleCard />
      <ArticlesHomePage />
    </>
  );
};
export default App;
