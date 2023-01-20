import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Styleheader from "./components/styleheader/styleheader";
import StyleButton from "./components/styleButton/styleButton";
import StyledInput from "./components/StyledInput/StyledInput";
import StyledForm from "./components/StyledForm/StyledForm";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Styleheader text="header"> </Styleheader>
        <StyledForm />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
export default App;
