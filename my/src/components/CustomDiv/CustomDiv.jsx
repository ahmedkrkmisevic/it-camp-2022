import React, { useState } from "react";
import "./CustomDiv.css";
const CustomDiv = ({
  children,
  width,
  height,
  borderRadius,
  border,
  padding,
  marrgin,
}) => {
  const divWidth = width ? width : 100;
  const divHeight = height ? height : 100;
  const divBR = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "1px solid black";
  const divMargin = marrgin ? marrgin : 0;
  const divPadding = padding ? padding : 0;

  return;
  <div
    style={{
      width: divWidth,
      height: divHeight,
      borderRadius: divBR,
      border: divBorder,
      margin: divMargin,
      padding: divPadding,
    }}
  >
    {children}
  </div>;
};
export default CustomDiv;
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
