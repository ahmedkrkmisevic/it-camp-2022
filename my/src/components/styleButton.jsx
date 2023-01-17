import React from "react";
import "./styledButton.css";

const StyledButton = (props) => {
  var ButtonText = "Click me";

  function buttonHandler() {
    console.log("clicked");
    ButtonText = "Kliknuoo sssiii";
    return ButtonText;
  }

  return (
    <button className="styledButton" onClick={() => buttonHandler()}>
      {props.innerText}
    </button>
  );
};

export default StyledButton;
