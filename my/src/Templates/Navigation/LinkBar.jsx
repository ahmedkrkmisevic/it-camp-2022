import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";
import { colors } from "../../util/theme";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const LinkBar = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="30px"
      padding="20px 10%"
      border="0px"
    >
      <Grid container direction="row">
        <CustomDiv display="flex" margin="0px 10px">
          <text onclick="window.location.href='https://w3docs.com';">Home</text>
        </CustomDiv>
        <CustomDiv display="flex" margin="0px 10px">
          <text onclick="window.location.href='https://w3docs.com';">Shop</text>
        </CustomDiv>
        <CustomDiv display="flex" margin="0px 10px">
          <text onclick="window.location.href='https://w3docs.com';">Blog</text>
        </CustomDiv>
        <CustomDiv display="flex" margin="0px 10px">
          <text onclick="window.location.href='https://w3docs.com';">
            O nama
          </text>
        </CustomDiv>
        <CustomDiv display="flex" margin="0px 10px">
          <text onclick="window.location.href='https://w3docs.com';">
            Kontakt
          </text>
        </CustomDiv>
      </Grid>
      <Grid item md={6} lg={6}>
        <CustomDiv>
          <Autocomplete
            width="70px"
            border="2px"
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pretrazite"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </CustomDiv>
      </Grid>
    </CustomDiv>
  );
};

export default LinkBar;
