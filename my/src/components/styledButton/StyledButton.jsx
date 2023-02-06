import React from "react";
import "./StyledButton.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const StyledButton = (props) => {
  return (
    <button className="styledButton" onClick={props.onClickHandler}>
      {props.innerText}
    </button>
  );
  const StyledButton = ({ onClickHandler, innerText }) => {
    return <PrimaryButton onClick={onClickHandler}>{innerText}</PrimaryButton>;
  };
};

export default StyledButton;
