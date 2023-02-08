import React from "react";
import { Grid } from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv";

const Navigation = () => {
  return (
    <Grid container direction="row">
      <Grid item xs={7} sm={5} md={5} lg={4}></Grid>
      <CustomDiv border="2px solid black"></CustomDiv>
      <Grid item xs={0} sm={5} md={5} lg={4}></Grid>
      <CustomDiv border="2px solid black"></CustomDiv>
      <Grid item xs={3} sm={2} md={2} lg={4}></Grid>
      <CustomDiv border="2px solid black"></CustomDiv>
    </Grid>
  );
};
export default Navigation;
