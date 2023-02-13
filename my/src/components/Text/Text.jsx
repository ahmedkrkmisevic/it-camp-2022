import { letterSpacing } from "@mui/system";
import React from "react";
import styled from "styled-components";
const Text = styled.p`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.font.Size : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "inherit")};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "inherit")};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "none"};
  letter-spacing: ${(props) => (letterSpacing ? props.letterSpacing : "1px")};
  vertical-align: ${props};
`;
export default Text;
