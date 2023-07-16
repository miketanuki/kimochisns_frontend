import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../index.css";

type KimochiProps = {
  averageScore: null | number;
};

const SentimentImage: React.FC<KimochiProps> = ({ averageScore }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [nextImage, setNextImage] = useState<string | null>(null);
  // const [testAvaregeScore, setTestAvaregeScore] = useState<number>(1);

  useEffect(() => {
    const images = [
      { scoreRange: [0, 1], src: "kimochi/ame.svg", alt: "score 0-1" },
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
      return averageScore !== null && averageScore >= min && averageScore < max;
    });

    if (image && currentImage !== image.src) {
      setNextImage(image.src);
    }
  }, [averageScore, currentImage]);

  const handleImageLoad = () => {
    setCurrentImage(nextImage);
    setNextImage(null);
  };

  // const handleButtonClick = () => {
  //   setTestAvaregeScore(testAvaregeScore + 1);
  // };

  return (
    <div>
      <div className="max-w-xl mx-auto mt-4 min-h-[300px] md:min-h-[500px]">
        {currentImage && (
          <CSSTransition
            in={!nextImage}
            timeout={1000}
            classNames="fade"
            unmountOnExit
          >
            <img src={currentImage} alt="Kimochi" />
          </CSSTransition>
        )}
        {nextImage && (
          <img
            src={nextImage}
            alt="Kimochi"
            style={{ opacity: 0 }}
            onLoad={handleImageLoad}
          />
        )}
      </div>
      {/* <div>
      <button onClick={handleButtonClick}>Add 1 to testAvaregeScore</button>
    </div> */}
    </div>
  );
};

export default SentimentImage;
