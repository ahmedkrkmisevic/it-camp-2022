import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Styleheader from "./components/styleheader/styleheader";
import StyleButton from "./components/styleButton/styleButton";
import StyledInput from "./components/StyledInput/StyledInput";
import StyledForm from "./components/StyledForm/StyledForm";
import CustomDiv from "./components/CustomDiv/CustomDiv";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CustomDiv>
          <h4>{fullname}</h4>
        </CustomDiv>
        <CustomForm sendData={(name, lname) => dataGrabber(name, lname)} />
      </header>
    </div>
  );

  function dataGrabber(name, lname) {
    let fullname = name + " " + lname;
    console.log(fullname);
    FullName(fullname);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomDiv>
          <h4>{fullname}</h4>
        </CustomDiv>
        <CustomForm sendData={(name, lname) => dataGrabber(name, lname)} />
      </header>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
// import React from "react";
// import "./App.css";
// import StyledButton from "./components/StyledButton/StyledButton";
// import CustomForm from "./components/CustomForm/CustomForm";

// const App = () => {
//   const [innerText, setInnerText] = useState("");
//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//     clicked ? setInnerText("Clicked") : setInnerText("Click me");
//   }, [clicked]);

//   function buttonClick() {
//     setClicked(!clicked);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <StyledButton innerText={innerText} onClickHandler={buttonClick} />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <CustomForm />
//       </header>
//     </div>
//   );
// };
