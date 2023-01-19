import React from "react";
import "./styleButton.css";

const StyleButton = (props) => {
  var ButtonText = "Click me";

  function buttonHandler() {
    console.log("clicked");
    ButtonText = "Kliknuoo sssiii";
    return ButtonText;
  }

  return (
    <button className="styleButton" onClick={props.onClickHandler}>
      {props.innerText}
    </button>
  );
};
