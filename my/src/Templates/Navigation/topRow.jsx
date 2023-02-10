import React from "react";
import { Grid } from "@mui/material/Grid";

const TopRow = () => {
  return (
    <Grid container="row">
      <CustomDiv
        bgColor={colors.secondColor}
        width="100%"
        height="30px"
      ></CustomDiv>
    </Grid>
  );
};
export default TopRow;
