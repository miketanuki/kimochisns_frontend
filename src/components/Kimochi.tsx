import React from "react";
import "../index.css";

type KimochiProps = {
  averageScore: number;
};


/**
 * スコアに応じた気持ちの画像を表示するコンポーネント
 * @param averageScore 平均スコア
 */
const SentimentImage: React.FC<KimochiProps> = ({ averageScore }) => {
  const getImage = (averageScore: number) => {
    const images = [
      { scoreRange: [0, 1], src: "kimochi/ame.svg", alt: "score 0-1" },
      { scoreRange: [1, 2], src: "kimochi/ame.svg", alt: "score 1-2" },
      { scoreRange: [2, 3], src: "kimochi/ame.svg", alt: "score 2-3" },
      { scoreRange: [3, 4], src: "kimochi/kumori.svg", alt: "score 3-4" },
      { scoreRange: [4, 5], src: "kimochi/kumori.svg", alt: "score 4-5" },
      { scoreRange: [5, 6], src: "kimochi/kumori.svg", alt: "score 5-6" },
      { scoreRange: [6, 7], src: "kimochi/taiyo.svg", alt: "score 6-7" },
      { scoreRange: [7, 8], src: "kimochi/taiyo.svg", alt: "score 7-8" },
      { scoreRange: [8, 9], src: "kimochi/taiyo.svg", alt: "score 8-9" },
      { scoreRange: [9, 10], src: "kimochi/taiyo.svg", alt: "score 9-10" },
    ];

    const image = images.find((image) => {
      const [min, max] = image.scoreRange;
      return averageScore >= min && averageScore < max;
    });

    if (image) {
      return <img src={image.src} alt={image.alt} />;
    } else {
      return null;
    }
  };

  return <div className="max-w-xl mx-auto mt-4">{getImage(averageScore)}</div>;
};

export default SentimentImage;