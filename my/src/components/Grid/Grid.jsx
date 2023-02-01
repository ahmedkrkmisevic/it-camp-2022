import React from "react";
const GridCmp = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <CustomDiv></CustomDiv>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
};
