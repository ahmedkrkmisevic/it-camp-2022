import { textAlign } from "@mui/system";
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
  alignItems,
  alignContent,
}) => {
  const divHeight = height ? height : 100;
  const divWidth = width ? width : 100;
  const divBR = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "0px";
  const divMargin = margin ? margin : 0;
  const divPadding = padding ? padding : 0;
  const backgroundColor = bgColor ? bgColor : "inherit";
  const disp = display ? display : "block";
  const jc = justifyContent ? justifyContent : "flex-start";
  const ji = justifyItems ? justifyItems : "center";
  const ai = alignItems ? alignItems : "center";
  const ac = alignContent ? alignContent : "center";
  const va = verticalAlign ? verticalAlign : "middle";
  const ta = textAlign ? textAlign : "left";

  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        borderRadius: divBR,
        border: divBorder,
        margin: divMargin,
        padding: divPadding,
        backgroundColor: backgroundColor,
        display: disp,
        justifyContent: jc,
        justifyItems: ji,
        alignContent: ac,
        alignItems: ai,
        verticalAlign: va,
        textAlign: ta,
      }}
    >
      {children}
    </div>
  );
};
export default CustomDiv;
