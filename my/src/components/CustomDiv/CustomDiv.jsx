import React from "react";
import "./CustomDiv.css";

const CustomDiv = ({
  children,
  width,
  height,
  borderRadius,
  border,
  padding,
  margin,
  bgColor,
  display,
  justifyContent,
  justifyItems,
}) => {
  const divWidth = width ? width : 100;
  const divHeight = height ? height : 100;
  const divBR = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "1px solid black";
  const divMargin = margin ? margin : 0;
  const divPadding = padding ? padding : 0;
  const backGroundColor = bgColor ? bgColor : "white";
  const disp = display ? display : "block";
  const jc = justifyContent ? justifyContent : "flex-start";
  const ji = justifyItems ? justifyItems : "center";

  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        borderRadius: divBR,
        border: divBorder,
        margin: divMargin,
        padding: divPadding,
        backGroundColor: backGroundColor,
        display: disp,
        justifyContent: jc,
        justifyItems: ji,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
