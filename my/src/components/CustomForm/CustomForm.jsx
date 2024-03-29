import React, { useState } from "react";
import StyledInput from "../StyledInput/StyledInput";
import StyleButton from "../styleButton/styleButton";

const CustomForm = () => {
  const CustomForm = (props) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    function nameHandler(e) {
      setName(e.target.value);
    }
    function lastNameHandler(e) {
      setLastName(e.target.value);
    }
    return (
      <div>
        <StyledInput onChangeHandler={nameHandler} value={name} />
        <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
        <StyleButton innerText="Send" />
        <StyleButton
          onClickHandler={() => props.sendData(name, lastName)}
          innerText="Send"
        />
      </div>
    );
  };
};
export default CustomForm;
