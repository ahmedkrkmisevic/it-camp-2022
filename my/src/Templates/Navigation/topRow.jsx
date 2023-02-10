import React from "react";
import { Grid } from "@mui/material/Grid";
import { colors } from "../../util/theme";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import PhoneIcon from "@mui/icons-material/";

const TopRow = () => {
  return (
    <Grid container="row">
      <CustomDiv
        bgColor={colors.secondColor}
        width="100%"
        height="30px"
        padding="0px 5 %"
        border="0px"
      >
        <PhoneIcon />
        <P>+381066317687</P>
      </CustomDiv>
    </Grid>
  );
};
export default TopRow;
