import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Text from "../../components/Text/Text";
import { fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";

const TopRow = () => {
  const screenWidth = getScreenWidth();
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width="100%"
      height="30px"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6} spacing={3}>
          <CustomDiv
            display="flex"
            alignItems="flex-start"
            justifyItems=" flex-start"
          >
            <PhoneIcon
              style={{
                fontSize: fontSize.normal,
              }}
            />
            <Text fontSize={fontSize.small}>+381637412151</Text>
            <CustomDiv
              display="flex"
              alignItems="flex-start"
              margin="0px 0px 0px 5px"
            >
              <EmailIcon
                style={{
                  fontSize: fontSize.normal,
                }}
              />
              <Text fontSize={fontSize.small}>info@gmail.com</Text>
            </CustomDiv>
          </CustomDiv>
        </Grid>
        <Grid item md={6} lg={6} spacing={0}>
          <CustomDiv width="50%" border="0px" bgColor="inherit"></CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
