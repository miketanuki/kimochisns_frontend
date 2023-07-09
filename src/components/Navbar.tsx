import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledDiv = styled("div")({
  flexGrow: 1,
  backgroundColor: "#fff",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

const Navbar: React.FC = () => {
  return (
    <StyledDiv>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", boxShadow: "none" }}
      >
        <Toolbar>
          <StyledTypography
            variant="h6"
            sx={{ color: "#606060", letterSpacing: "0.08em" }}
          >
            Kimochi
          </StyledTypography>
          {/* <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
};

export default Navbar;
