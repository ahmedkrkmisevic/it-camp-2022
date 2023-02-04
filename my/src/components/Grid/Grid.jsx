import React from "react";
import CustomDiv from "../CustomDiv/CustomDiv";
import Grid from "@mui/material/Grid";

const GridCmp = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={2}
      >
        <CustomDiv width="30%"> xs=8 </CustomDiv>
        <CustomDiv width="30%"> xs=8 </CustomDiv>
        <CustomDiv width="30%"> xs=8 </CustomDiv>
      </Grid>
      <Grid item xs={6} sm={10} md={8} lg={6}>
        <CustomDiv width="100%"> xs=8 </CustomDiv>
      </Grid>
      <Grid item xs={6} sm={2} md={4} lg={6}>
        <CustomDiv width="100%"> xs=4 </CustomDiv>
      </Grid>
      <Grid item xs={6}>
        <CustomDiv width="100%"> xs=6 </CustomDiv>
      </Grid>
      <Grid item xs={6}>
        <CustomDiv width="100%"> xs=6 </CustomDiv>
      </Grid>
    </Grid>
  );
};

export default GridCmp;
// The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
// The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout.
// The Grid component shouldn't be confused with a data grid; it is closer to a layout grid. For a data grid head to the DataGrid component.
// The grid system is implemented with the Grid component:

// It uses CSS's Flexible Box module for high flexibility.
// There are two types of layout: containers and items.
// Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
// Items have padding to create the spacing between individual items.
// There are five grid breakpoints: xs, sm, md, lg, and xl.
// Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints.
// // If you are new to or unfamiliar with flexbox, we encourage you to read this CSS-Tricks flexbox guide.
