import { Grid } from "@mui/material";
import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Logo from "../../assets/images/logo.png";
import { colors } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";
import { fontSize } from "../../util/theme";

const MainBar = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="30px"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6}>
          <img src={Logo} alt="Logo" width="200" height="100" />
        </Grid>
        <Grid item md={6} lg={6}></Grid>
      </Grid>
    </CustomDiv>
  );
};
export default MainBar;
