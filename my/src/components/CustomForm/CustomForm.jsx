import React, { useState } from "react";
import StyledInput from "../StyledInput/StyledInput";
import StyledButton from "../StyledButton/StyledButton";

const CustomForm = () => {
const CustomForm = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

 const CustomForm = () => {
    <div>
      <StyledInput onChangeHandler={nameHandler} value={name} />
      <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
      <StyledButton innerText='Send' />
      <StyledButton
        onClickHandler={() => props.sendData(name, lastName)}
        innerText='Send'
      />
    </div>
  );
};
export default CustomForm;