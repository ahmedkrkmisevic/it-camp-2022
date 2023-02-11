import React from "react";
import { Grid } from "@mui/material/Grid/Grid";
import { colors } from "../../util/theme";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import PhoneIcon from "@mui/icons-material/Phone";
import { fontSize } from "@mui/system";

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
        <Grid item lg={6} spacing={0}>
          <CustomDiv
            width="50%"
            height="auto"
            border="0px"
            bgColor="inherit"
            display="flex"
            alignItems="center"
          >
            <PhoneIcon style={{ fontSize: fontSize.normal }} />
            <P>+381066317687</P>
          </CustomDiv>
          <CustomDiv
            width="50%"
            height="auto"
            border="0px"
            bgColor="inherit"
            display="flex"
            alignItems="center"
          ></CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};
export default TopRow;
