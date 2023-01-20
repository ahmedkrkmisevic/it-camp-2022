import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Styleheader from "./components/styleheader/styleheader";
import StyleButton from "./components/styleButton/styleButton";
import StyledInput from "./components/StyledInput/StyledInput";
const App = () => {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    clicked ? setInnerText("clicked") : setInnerText("click me");
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }
  function onChangeFunction(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Styleheader text="header"> </Styleheader>
        <StyleButton innerText={innerText} onClickHandler={buttonClick} />
        <StyledInput onChangeHandler={onChangeFunction} value={inputValue} />
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
