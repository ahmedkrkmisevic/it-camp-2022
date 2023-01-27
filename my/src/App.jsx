import React, { useState } from "react";

import "./App.css";
import CustomForm from "./components/CustomForm/CustomForm";
import CustomDiv from "./components/CustomDiv/CustomDiv";
import ToDo from "./components/ToDo/ToDo";

const App = () => {
  const [fullName, setFullName] = useState("");

  function dataGrabber(name, lastName) {
    let fullName = name + " " + lastName;
    console.log(fullName);
    setFullName(fullName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomDiv>
          <h4>{fullName}</h4>
        </CustomDiv>
        <CustomForm sendData={(name, lName) => dataGrabber(name, lName)} />
        <ToDo></ToDo>
      </header>
    </div>
  );
};

export default App;
// console.log(1); //
// console.log(1); //
// console.log(1); //
// console.log(1); //
// console.log(1); //
// console.log(1); //
// console.log(1); //
// console.log(1); //
