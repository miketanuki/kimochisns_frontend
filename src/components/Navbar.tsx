import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import KimochiMeter from "./KimochiMeter";
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

/**
 * Navbarコンポーネント、Kimochiロゴ、KimochiDonut、KimochiMeterコンポーネントを表示。
 * @param {Props} averageScore - すべての投稿の平均感情スコア。
 * @param {Props} posts - 各投稿のid、content、sentiment_scoreを含むPostオブジェクトの配列。
 * @returns {JSX.Element} - Navbarコンポーネントを表すJSX要素。
 */
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
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
};

export default Navbar;
