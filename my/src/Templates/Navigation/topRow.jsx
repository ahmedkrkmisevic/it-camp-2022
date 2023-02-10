import React from "react";
import { Grid } from "@mui/material/Grid/Grid";
import { colors } from "../../util/theme";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import PhoneIcon from "@mui/icons-material/Phone";

const TopRow = () => {
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width="100%"
      height="30px"
      padding="0px 5 %"
      border="0px"
    >
      <Grid container direction="row">
        <CustomDiv width="50%" border="0px" bgColor="inherit">
          <PhoneIcon />
          <P>+381066317687</P>
        </CustomDiv>
        Grid
        <CustomDiv width="50%" border="0px" bgColor="inherit"></CustomDiv>
      </Grid>
    </CustomDiv>
  );
};
export default TopRow;
