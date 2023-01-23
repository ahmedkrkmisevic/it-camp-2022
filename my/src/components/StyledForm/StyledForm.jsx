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
    <div>
      <StyledInput onChangeHandler={nameHandler} value={name} />
      <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
      <StyleButton
        onClickHnadler={() => props.sendData(name, lastName)}
        innerText="send"
      />
    </div>
  );
};
export default StyledForm;

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
