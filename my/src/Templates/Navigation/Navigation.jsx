import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";

const Navigation = () => {
  return (
    <Grid container direction="row">
      <CustomDiv padding="0px 20px" border="0px" width="100%">
        <TopRow></TopRow>
      </CustomDiv>
    </Grid>
  );
};
export default Navigation;
