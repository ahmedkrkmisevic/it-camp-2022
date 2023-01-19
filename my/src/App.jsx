import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Styleheader from "./components/styleheader/styleheader";
import StyleButton from "./components/styleButton/styleButton";
const App = () => {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clicked ? setInnerText("clicked") : setInnerText("click me");
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Styleheader text="header"> </Styleheader>
        <StyleButton innerText={innerText} onClickHandler={buttonClick} />
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

import React, { useState } from "react";

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
