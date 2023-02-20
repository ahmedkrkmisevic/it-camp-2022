import { Grid } from "@mui/material";
import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Logo from "../../assets/images/img.png";
import Text from "../../components/Text/Text";
import { colors } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";
import { fontSize } from "../../util/theme";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";

const RightMenu = () => {};

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
