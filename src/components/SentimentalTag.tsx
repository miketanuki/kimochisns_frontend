// BEGIN: mui-sentimental-tag
import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/system";

type Props = {
  sentiment_score: number;
};

const SentimentalTag: React.FC<Props> = (props) => {
  const [sentimentalTag, setSentimentalTag] = useState<string>("");
  const [sentimentalTagColor, setSentimentalTagColor] = useState<string>("");

  const StyledChip = styled(Chip)`
    background-color: ${sentimentalTagColor};
    color: #333;
    font-size: 12px;
    width: 120px;
    height: 30px;
    margin-left: auto;
  `;

  useEffect(() => {
    if (props.sentiment_score < 2) {
      setSentimentalTag("ちくちく");
      setSentimentalTagColor("#FFB6C1");
    } else if (props.sentiment_score >= 2 && props.sentiment_score < 4) {
      setSentimentalTag("ふつー");
      setSentimentalTagColor("#FFD700");
    } else {
      setSentimentalTag("しあわせ");
      setSentimentalTagColor("#90EE90");
    }
  }, [props.sentiment_score]);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <StyledChip label={`${sentimentalTag}ことば`} />
    </div>
  );
};

export default SentimentalTag;
// END: mui-sentimental-tag
