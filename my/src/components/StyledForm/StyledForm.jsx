import React from "react";
import StyleButton from "../styleButton/styleButton";
import "./StyledForm.css";
import StyledInput from "../StyledInput/StyledInput";
import { useState, useEffect } from "react";

const StyledForm = (props) => {
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
    <form>
      <label>Username</label>
      <StyleButton innerText={innerText} onClickHandler={buttonClick} />
      <StyledInput onChangeHandler={onChangeFunction} value={inputValue} />
    </form>
  );
};
export default StyledForm;
// import React, { useState } from "react";
// import StyledInput from "../StyledInput/StyledInput";
// import StyledButton from "../StyledButton/StyledButton";

// const CustomForm = () => {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");

//   function nameHandler(e) {
//     setName(e.target.value);
//   }

//   function lastNameHandler(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <div>
//       <StyledInput onChangeHandler={nameHandler} value={name} />
//       <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
//       <StyledButton innerText="Send" />
//     </div>
//   );
// };

// export default CustomForm;
// console.log(1);
// console.log(2);
