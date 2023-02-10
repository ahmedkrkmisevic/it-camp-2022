import React from "react";
import { Grid } from "@mui/material/Grid";
import { colors } from "../../util/theme";

const TopRow = () => {
  return (
    <Grid container="row">
      <CustomDiv
        bgColor={colors.secondColor}
        width="100%"
        height="30px"
        padding="0px 5 %"
        border="0px"
      ></CustomDiv>
    </Grid>
  );
};
export default TopRow;
