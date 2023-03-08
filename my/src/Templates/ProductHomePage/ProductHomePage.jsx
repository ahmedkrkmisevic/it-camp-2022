import { Grid } from "@mui/material";
import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";

const HomeProductPage = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="auto"
      padding="10px"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={3} lg={3}>
          <CustomDiv
            bgColor="white"
            display="flex"
            width="100%"
            height="auto"
            padding="10px"
            border="1px solid black "
          >
            CATEGORY
          </CustomDiv>
        </Grid>
        <Grid item md={9} lg={9}>
          <CustomDiv
            bgColor="white"
            display="flex"
            width="100%"
            height="auto"
            padding="10px"
            border="1px solid black"
          >
            PRODUCTS
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default HomeProductPage;
