import React, { useState } from "react";
const StyledInput = (props) => {
  return <input onChange={props.onChangeHandler} value={props.value} />;
};
export default StyledInput;
