import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import KimochiMeter from "./KimochiMeter";
import { type } from "os";
import KimochiDonut from "./KimochiDonut";
type Post = {
  id: number;
  content: string;
  sentiment_score: number;
};

type Props = {
  averageScore: number;
  posts: Post[];
};

const StyledDiv = styled("div")({
  flexGrow: 1,
  backgroundColor: "#fff",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

const Navbar: React.FC<Props> = ({ averageScore, posts }) => {
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
          <KimochiDonut posts={posts} />
          <KimochiMeter averageScore={averageScore} />
          {/* <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
};

export default Navbar;
