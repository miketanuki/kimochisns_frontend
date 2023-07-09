import React from "react";

type KimochiProps = {
  score: number;
};

const SentimentImage: React.FC<KimochiProps> = ({ score }) => {
  const getImage = (averageScore: number) => {
    if (averageScore >= 0 && averageScore < 1) {
      return <img src="kimochi/ame.svg" alt="score 0-1" />;
    } else if (averageScore >= 1 && averageScore < 2) {
      return <img src="kimochi/ame.svg" alt="score 1-2" />;
    } else if (averageScore >= 2 && averageScore < 3) {
      return <img src="kimochi/ame.svg" alt="score 2-3" />;
    } else if (averageScore >= 3 && averageScore < 4) {
      return <img src="kimochi/kumori.svg" alt="score 3-4" />;
    } else if (averageScore >= 4 && averageScore < 5) {
      return <img src="kimochi/kumori.svg" alt="score 4-5" />;
    } else if (averageScore >= 5 && averageScore < 6) {
      return <img src="kimochi/kumori.svg" alt="score 5-6" />;
    } else if (averageScore >= 6 && averageScore < 7) {
      return <img src="kimochi/taiyo.svg" alt="score 6-7" />;
    } else if (averageScore >= 7 && averageScore < 8) {
      return <img src="kimochi/taiyo.svg" alt="score 7-8" />;
    } else if (averageScore >= 8 && averageScore < 9) {
      return <img src="kimochi/taiyo.svg" alt="score 8-9" />;
    } else if (averageScore >= 9 && averageScore <= 10) {
      return <img src="kimochi/taiyo.svg" alt="score 9-10" />;
    } else {
      return null;
    }
  };

  return <div>{getImage(score)}</div>;
};

export default SentimentImage;